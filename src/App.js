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
      <h1>To DO List !!!!!!!!!!</h1>
      <form>
        <FormControl>
          <InputLabel>Adding Todos !</InputLabel>
          <Input
            label="Enter your new task !"
            variant="filled"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          disabled={!input}>Add Task
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
