import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        🗑️ DELETE ME
      </DeleteForeverIcon>
    </List>
  );
}

export default Todo;
