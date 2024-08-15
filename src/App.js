/*import React from "react";
import ResponsiveDrawer from "./Components/SideBar";
import Header from "./Components/Header";
import MovieGrid from "./Components/MovieGrid";
import MovieGridRedux from "./Components/MovieGridRedux";

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid/>
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;*/

/*import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ResponsiveDrawer from "./Components/SideBar";
import Header from "./Components/Header";
import MovieGrid from "./Components/MovieGrid";
import MovieGridredux from "./MovieGridredux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
        <MovieGridredux />
      </main>
    </Provider>
  );
}

export default App;*/

// src/App.js
/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar';
import Header from './Components/Header';
import MovieGrid from './Components/MovieGrid';
import MovieGridRedux from './Components/MovieGridRedux';
import { Provider } from 'react-redux';
//import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ResponsiveDrawer />
        <main style={{ marginLeft: '240px', marginTop: '64px' }}>
          <MovieGrid />
          <MovieGridRedux />
  
        </main>
      </div>
    </Provider>
  );
}

export default App;
*/

/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar';
import Header from './Components/Header';
import MovieGrid from './Components/MovieGrid';
import MovieGridRedux from './Components/MovieGridRedux';

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;*/

//3

/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar'; // Ensure this file exists
import Header from './Components/Header'; // Ensure this file exists
import MovieGrid from './Components/MovieGrid'; // Ensure this file exists
import MovieGridRedux from './Components/MovieGridRedux';

//import MovieReducer from './redux/MovieReducer'; // Correct if movieReducer.js is in src/redux/
 // Ensure this file exists

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid/>
      </main>
      <MovieGridRedux/>
    
    </div>
  );
}

export default App;
*/

import React from 'react';
import ResponsiveDrawer from './Components/SideBar'; // Ensure this file exists
import Header from './Components/Header'; // Ensure this file exists
import MovieGrid from './Components/MovieGrid'; // Ensure this file exists
import MovieGridRedux from './Components/MovieGridRedux'; // Ensure this file exists

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
      </main>
      <MovieGridRedux />
    </div>
  );
}

export default App;


