import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Todo from './Todo';
import db from './Firebase';
import firebase from "firebase"


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
  db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({ id:doc.id, todo: doc.data().todo})))
  })}, [])

  const addTodo = (Event) => {
    Event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="App">
      <h1 className =  "App-header"><span>🕮</span>Todo List ✅</h1>
      <form >
        <FormControl>
          <InputLabel><span role="img" aria-label="emoji"> </span> Put your task down</InputLabel>
          <Input value={input} onChange={Event => setInput(Event.target.value)} />
          <FormHelperText>Put down your thoughts and we'll remember</FormHelperText>
        </FormControl>
          <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
         <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;