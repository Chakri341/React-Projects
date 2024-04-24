import React, { useEffect, useRef, useState } from "react";
import useGenerate from "./useGenerate.js";
import "./github.css";

const ProfileFinder = () => {
  const userName = useRef(null);
  const [user, setUser] = useState("");

  const handleFind = () => {
    setUser(userName.current.value);
  };

  const { followers, following, public_repos, created_at, login, avatar_url } =
    useGenerate(user);

  return (
    <div className="container">
      <h1 style={{marginTop:"10px"}}>HI, {user}</h1>
      <div className="input-container">
        <input type="text" name="userName" ref={userName} className="input" />
        <button className="button" onClick={handleFind}>
          Find
        </button>
      </div>
      {user !== "" ? (
        <div className="user-details">
         {user.avatar_url&&  <div style={{ marginTop: "5%" }}>
            <img src={avatar_url} className="img" style={{ width: "90%" }} />
          </div>}
          <div className="item-container" style={{ marginTop: "5%", marginLeft:"15%" }}>
            <div className="item">
              <h1>Username : {login}</h1>
            </div>
            <div className="item">
              <h1>Followers: {followers}</h1>
            </div>
            <div className="item">
              <h1> Following: {following}</h1>
            </div>
            <div className="item">
              <h1>Public Repos :{public_repos}</h1>
            </div>
            <div className="item">
              <h1>{created_at}</h1>
            </div>
          </div>
        </div>
      ) : (
        <h1>Enter the User Name</h1>
      )}
    </div>
  );
};

export default ProfileFinder;
