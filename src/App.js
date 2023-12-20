import React from "react";
import {Footer, Blog, Header, Popular} from "./containers";
import {  Navbar } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      
      <Popular />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
