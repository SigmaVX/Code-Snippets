/* Import dependencies */
var Spotify = require('node-spotify-api');
var inquirer = require('inquirer');

/* configure dotenv */
require('dotenv').config();

/* start a new spotifyClient */
var spotifyClient = new Spotify({
  id: process.env.SPOTIFY_CLIENT_ID,
  secret: process.env.SPOTIFY_CLIENT_SECRET
});

/* Music constructor */
function Music() {
  /* Song bank to hold songs we listen to */
  this.songsListenedTo = [];

  /* save reference to this because of scoping inside of spotify object */
  var THISmusic = this;

  /* Set to hold our callback */
  this.playSim;

  /* Function executed when we say "chillax" */
  this.lookForPlaylist = function(playSim) {
    var playList = [];
    /* Store playSim callback function into object, so we don't have to pass it around from function to function */
    this.playSim = playSim;

    /* Hit spotify api looking for alex's playlists */
    spotifyClient.request('https://api.spotify.com/v1/users/alexrosenkranz/playlists').then(function(data) {
      /* store playlists and send them to method to be picked */
      playList = data.items;
      THISmusic.pickPlaylist(playList);
    });
  };

  /* Takes in list of playlists and lets us pick which one we want to listen to */
  this.pickPlaylist = function(playlists) {
    var playlistNames = [];
    var pickedPlaylistId;
    for (var i = 0; i < playlists.length; i++) {
      playlistNames.push(playlists[i].name);
    }
    inquirer
      .prompt([
        {
          name: 'playlistSelected',
          message: 'What playlist are you going to listen to?',
          type: 'list',
          choices: playlistNames
        }
      ])
      .then(function(playlistPicker) {
        for (var i = 0; i < playlists.length; i++) {
          if (playlists[i].name === playlistPicker.playlistSelected) {
            /* We only care about getting the id of the playlist back */
            pickedPlaylistId = playlists[i].id;
          }
        }
        /* Send playlist id to method to get our tracks */
        THISmusic.getPlaylistTracks(pickedPlaylistId);
      });
  };

  /* get alex rosenkranz's playlists */
  this.getPlaylistTracks = function(playlistId) {
    var playlistTracks = [];
    spotifyClient
      .request('https://api.spotify.com/v1/users/alexrosenkranz/playlists/' + playlistId + '/tracks?limit=30')
      .then(function(data) {
        for (var i = 0; i < data.items.length; i++) {
          playlistTracks.push('"' + data.items[i].track.name + '" by ' + data.items[i].track.album.artists[0]['name']);
        }
        /* run pickTrack and pass in our list of tracks from playlist */
        THISmusic.pickTrack(playlistTracks);
      });
  };

  /* Pick a track */
  this.pickTrack = function(tracks) {
    inquirer
      .prompt([
        {
          name: 'trackSelected',
          message: 'What song are you going to listen to?',
          type: 'list',
          choices: tracks
        }
      ])
      .then(function(trackPicker) {
        /* Select a track from playlist and let us know we listened to it */
        console.log('\n============');
        console.log('You just listened to...');
        console.log(trackPicker.trackSelected);
        console.log('============\n');

        /* push into our songsListenedTo bank */
        THISmusic.songsListenedTo.push(trackPicker.trackSelected);

        /* Play our Sim again (this is the callback function) */
        THISmusic.playSim();
      });
  };
}

module.exports = Music;
