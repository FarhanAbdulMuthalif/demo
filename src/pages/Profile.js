import React from "react";
import ProfileDetails from "./details/profileDetails";
import { useNavigate, Outlet } from "react-router-dom";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>Profile page</h1>
      <div className="profilecontent">
        <img
          src="https://media.istockphoto.com/photos/investment-technology-with-a-global-internet-connection-financial-picture-id1392046953?b=1&k=20&m=1392046953&s=170667a&w=0&h=cngtm8gJ_NBp6CgaUbUqUYlWmydEQnlfV2hKOerucKs="
          alt="loading"
        />
        <ProfileDetails />
      </div>
      <button
        className="viewProfile"
        onClick={() => {
          navigate("/profile/view-details");
        }}
      >
        View Details
      </button>
      <Outlet />
    </React.Fragment>
  );
}

export default Profile;
