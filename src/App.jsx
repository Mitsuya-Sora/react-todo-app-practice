import { useState } from "react";
import "./styles.css";

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={inputText}
          onChange={setTextInForm}
        />
        <button onClick={addTodoToList}>登録</button>
      </div>
      <div className="incomplete-area">
        <div className="title">未完了</div>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button onClick={() => moveTodoToCompleteList(index)}>
                  完了
                </button>
                <button onClick={() => removeTodoFromList(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <div className="title">完了</div>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button onClick={() => moveTodoToIncompleteList(index)}>
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
