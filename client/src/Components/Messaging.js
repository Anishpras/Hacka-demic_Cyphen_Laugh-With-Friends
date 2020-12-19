import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import Logo from "../images/logo-Hack.png";
const Messaging = () => {
  const [input, setInput] = useState("");
  const [messages, setMesseges] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMesseges(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="message">
      <img src={Logo} />
      <h1>Hello everyone.</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="message__formControl">
          <Input
            className="message__input"
            placeholder="Enter your message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="message__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
            <SendIcon className="send_icon" />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Messaging;
