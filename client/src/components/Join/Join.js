import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-container">
      <div className="join-main">
        <h1 className="heading">
          <div>
            <input
              placeholder=""
              className="join-input"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder=""
              className="join-input"
              type="text"
              onChange={e => setRoom(e.target.value)}
            />
          </div>
          <Link
            onClick={e => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button" type="submit">
              Sign In
            </button>
          </Link>
        </h1>
      </div>
    </div>
  );
};
export default Join;
