import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Member } from "./components/Member";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Footer from "./components/Footer";
import BoardModerator from "./components/file/BoardModerator";
import BoardAdmin from "./components/file/BoardAdmin";
import BoardUser from "./components/file/BoardUser";
import Profile from "./components/Profile";
import New from "./components/New";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/member" exact element={<Member />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/mod" exact element={<BoardModerator />} />
          <Route path="/admin" exact element={<BoardAdmin />} />
          <Route path="/user" exact element={<BoardUser />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/page/:Id" element={<New/>} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
