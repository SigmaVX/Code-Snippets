 -- Finds songs that made it into the top 5000 in initial release year
USE top_songsdb;

SELECT 
	top5000.artist, top5000.sont, top_albums.album, top5000.year 
FROM 
	top5000 
INNER JOIN 
	top_albums 
ON 
	(top5000.artist = top_albums.artist 
    AND top5000.year = top_albums.year);
WHERE
	(top5000.artist = "The Beatles"
    AND top_albums.artist = "The Beatles")
ORDER BY
	top5000.year;


-- Look up avg score
SELECT AVG(raw_total) FROM top_songsdb.top5000;

-- Number of David Bowie Songs
SELECT COUNT(artist) FROM top_songsdb.top5000 WHERE artist = "David Bowie";

