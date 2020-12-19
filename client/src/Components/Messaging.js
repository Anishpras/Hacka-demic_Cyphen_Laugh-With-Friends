import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
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
    // All the logic goes here for sending message
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
      <img src="https://scontent.fpat5-1.fna.fbcdn.net/v/t39.8562-6/37794079_285442762012286_2170626851641229312_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=Rdi1TWbWwyoAX-cimDm&_nc_ht=scontent.fpat5-1.fna&oh=f83c41b657df9aba926cc05eca11851f&oe=5F81D70C" />
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
