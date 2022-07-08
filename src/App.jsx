import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodo } from "./components/IncompleteTodo.jsx";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [completeTodos, setCompleteTodos] = useState([
    "complete1",
    "complete2"
  ]);
  const [inputText, setInputText] = useState("");

  // フォームにテキスト入力するとテキストがフォームに表示される。
  const setTextInForm = (event) => setInputText(event.target.value);

  const addTodoToList = () => {
    if (inputText === "") return;
    setIncompleteTodos([...incompleteTodos, inputText]);
    setInputText("");
  };

  const removeTodoFromList = (index) => {
    alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const moveTodoToCompleteList = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
    setIncompleteTodos(newIncompleteTodos);
  };

  const moveTodoToIncompleteList = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setCompleteTodos(newCompleteTodos);
  };

  const isTodoMoreThanFive = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        inputText={inputText}
        setTextInForm={setTextInForm}
        addTodoToList={addTodoToList}
        isDisabled={isTodoMoreThanFive}
      />

      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        moveTodoToCompleteList={moveTodoToCompleteList}
        removeTodoFromList={removeTodoFromList}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        moveTodoToIncompleteList={moveTodoToIncompleteList}
      />
    </>
  );
};
