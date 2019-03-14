import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    users: [],
    page: 0,
    loading: false,
    prevY: 0
  };

  componentDidMount() {
    // Add Script Tag So It Is Not On All Pages
    this.loadScript('https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver');

    // Load Initial Data
    this.getUsers(this.state.page);

    // Options - Target Is Viewport/Null For Root
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
    // Create an observer(callback, options)
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);
    //Observ the `loadingRef`
    this.observer.observe(this.loadingRef);

  }

  getUsers(page) {
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users?since=${page}&per_page=100`)
      .then(res => {
        console.log("Users Found: ", res.data);
        console.log("Users In State Before Update: ", this.state.users);
        this.setState({ users: [...this.state.users, ...res.data] });
        this.setState({ loading: false });
        console.log("Users In State After Update: ", this.state.users);
      }
    );
  }
  
  handleObserver(entities, observer) {
    // Makes sure event only fires when scrolling down (not up)
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      // Stores Ref To Last Position In Fetched Data
      const lastUser = this.state.users[this.state.users.length - 1];
      // Sets New Position Based On Last Position For New Query
      const curPage = lastUser.id;
      // Query With New Position
      this.getUsers(curPage);
      // Updates Current Page
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  // Used to make Polyfill Script Tag - Used For React
  loadScript = (url) => {
    // Selects first stript tag on DOM 
    const index  = window.document.getElementsByTagName("script")[0];
    // Make a <script> tag
    const script = window.document.createElement("script");
    // Set the src for the <script> tag
    script.src = url
    // Adds our sript tag at the top of the list of tags using parentNode
    index.parentNode.insertBefore(script, index)
  }

    render() {
      const loadingCSS = {height: '100px', margin: '30px'};
      const loadingTextCSS = { display: this.state.loading ? 'block' : 'none' };

      return (
        <div className="container">
          <div style={{ minHeight: '800px' }}>
            <ul>
              {this.state.users.map(user => <li key={user.id}>{user.login}</li>)}
            </ul>
          </div>
          <div
            ref={loadingRef => (this.loadingRef = loadingRef)}
            style={loadingCSS}
          >
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </div>
      );
    }
  }

export default App;
