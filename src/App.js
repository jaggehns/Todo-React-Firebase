import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here fires whent the app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //Stop the refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); //Clear input
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
