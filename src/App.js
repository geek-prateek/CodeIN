import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/Resources";
import React, { useState } from "react";
import Hackathons from "./components/Hackathons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Compiler from "./components/Compiler";
import PageNotFound from "./login/client/PageNotFound";
import Password from "./login/client/Password";
import Profile from "./login/client/Profile";
import Recovery from "./login/client/Recovery";
import Register from "./login/client/Register";
import Reset from "./login/client/Reset";
import Username from "./login/client/Username";
import Contests from "./components/Contests";
import Pages from "./components/Pages";
import Study from "./components/Study"; 
import Prep from "./components/Prep";
import Community from "./components/Community";
import Prep2 from "./components/Prep2";
import ContestPages from "./components/ContestPages";


function App() {
  
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
      
        <Navbar
          title="CodeIN"
          mode={mode}
          aboutText="Contests"
          toggleMode={toggleMode}
        />
        
        <div className="container my-3">
          <Switch>
            <Route exact path="/home">
              <Home key="home" mode={mode} />
            </Route>
            <Route exact path="/contestpages">
              <ContestPages key="contestpages" mode={mode} />
            </Route>
            <Route exact path="/prep2">
              <Prep2 key="prep2" mode={mode} />
            </Route>
            <Route exact path="/discuss">
              <Community key="discuss" mode={mode} />
            </Route>
            <Route exact path="/contest">
              <Contests key="contest" mode={mode} />
            </Route>
            <Route exact path="/page">
              <PageNotFound key="page" mode={mode} />
            </Route>
            <Route exact path="/pass">
              <Password key="pass" mode={mode} />
            </Route>
            <Route exact path="/prof">
              <Profile key="prof" mode={mode} />
            </Route>
            <Route exact path="/reco">
              <Recovery key="reco" mode={mode} />
            </Route>
            <Route exact path="/regi">
              <Register key="regi" mode={mode} />
            </Route>
            <Route exact path="/reset">
              <Reset key="reset" mode={mode} />
            </Route>
            <Route exact path="/user">
              <Username key="user" mode={mode} />
            </Route>
            <Route exact path="/study">
              <Study key="study" mode={mode} />
            </Route>
            <Route exact path="/about">
              <Resources key="res" mode={mode} />
            </Route>
            <Route exact path="/prep">
              <Prep key="prep" mode={mode} />
            </Route>
              
            <Route exact path="/pages">
              <Pages key="pages" mode={mode} />
            </Route>
            <Route exact path="/hack">
              <Hackathons
                key="hack"
                pageSize={21}
                category="technology"
                mode={mode}
              />
            </Route>
            <Route exact path="/ide">
              <Compiler key="ide" mode={mode} />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer/>
      </Router>

      
    </>
  );
}

export default App;
