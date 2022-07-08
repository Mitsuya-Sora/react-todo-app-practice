import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, moveTodoToIncompleteList } = props;
  return (
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
  );
};
