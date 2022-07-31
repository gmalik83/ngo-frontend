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
import { VisionAndMission } from "./components/VisionAndMission";
import AdminAnnouncement from "./components/file/Admin/AdminAnnouncement";
import AdminImage from "./components/file/Admin/AdminImage";
import AdminPage from "./components/file/Admin/AdminPage";
import AdminVision from "./components/file/Admin/AdminVision";

const App = () => {
  return (
    <>
      <Router>
        {/* Navbar is Fixed for Every Page*/}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" exact element={<Work />} />
          <Route
            path="/admin/announcement"
            exact
            element={<AdminAnnouncement />}
          />
          <Route path="/admin/image" exact element={<AdminImage />} />
          <Route path="/admin/page" exact element={<AdminPage />} />
          <Route path="/admin/vision" exact element={<AdminVision />} />
          <Route path="/member" exact element={<Member />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/mod" exact element={<BoardModerator />} />
          <Route path="/admin" exact element={<BoardAdmin />} />
          <Route path="/user" exact element={<BoardUser />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/vision-mission" exact element={<VisionAndMission />} />
          <Route path="/page/:Id" element={<New />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* Footer is fixed for Every Page */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
 