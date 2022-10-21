import React, { useState } from "react";

function Chat({ socket, username, room }) {
  const [currentMessage, setcurrentMessage] = useState("");
  return (
    <div>
      <div className="chat-header">
        <p>Lets Chats</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey... "
          onChange={(event) => {
            setcurrentMessage(event.target.value);
          }}
        />
        <button>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
