import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [completeTodos, setCompleteTodos] = useState([
    "complete1",
    "complete2"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>登録</button>
      </div>
      <div className="incomplete-area">
        <div className="title">未完了</div>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li className="list-row">
                <div>{todo}</div>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <div className="title">完了</div>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li className="list-row">
                <div>{todo}</div>
                <button>完了</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
