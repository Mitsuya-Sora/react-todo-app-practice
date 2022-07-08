import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, moveTodoToCompleteList, removeTodoFromList } = props;
  return (
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
  );
};
