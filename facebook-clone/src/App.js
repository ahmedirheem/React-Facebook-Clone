import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useStateContext } from './ContextProvider'
import { Context } from "./ContextProvider";

import React, { useContext } from "react";

function App() {
  const {username, setUsername} = useContext(Context)


  console.log(username);
  return (
    <div className="App">
      {!username ? (
        <Login/>
      ): (
        <>
          <Header />
          <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
