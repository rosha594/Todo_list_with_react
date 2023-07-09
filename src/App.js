import { useEffect, useState } from "react";
import "./style.css";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodoList(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault(); //stop page by refreshing

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          rohan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Task
        </Button>
      </form>
    

      <ul>
        {todoList.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
