import React from "react";
import { v1 as uuid } from "uuid";
import SideBar from "../Components/SideBar";

const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }

  return (
    <div className="create-room">
      <SideBar />
      <div className="video-button">
        <center>
          <button className="BUTTON_GGY" onClick={create}>
            Create room
          </button>
        </center>
      </div>
    </div>
  );
};

export default CreateRoom;
