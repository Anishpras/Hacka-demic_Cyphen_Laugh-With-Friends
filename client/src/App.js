import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Memes from "./Components/Memes";
import SideBar from "./Components/SideBar";
import "./Styles/app.scss";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import React from "react";
import Home from "./Components/Home";
import Youtube from "./Components/Youtube";
import MessagingComponent from "./Components/MessagingComponent";

// import { useEffect, useState } from "react";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/video" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
          <Route path="/meme">
            <SideBar />
            <Memes />
          </Route>
          <Route path="/messaging">
            <SideBar />
            <MessagingComponent />
          </Route>
          <Route path="/play">
            <SideBar />
            <Youtube />
          </Route>
          <Route path="/">
            <SideBar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
