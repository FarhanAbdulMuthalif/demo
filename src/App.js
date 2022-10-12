import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/notFound";
import ProfileView from "./pages/ProfileView";

function App() {
  return (
    <BrowserRouter /* basename="/prosol" */>
      <div className="App">
        <Header />
      </div>
      {/* <About />
      <Home />
      <Profile /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="view-details" element={<ProfileView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
