import React from "react";

export const InputTodo = (props) => {
  const { inputText, setTextInForm, addTodoToList, isDisabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={isDisabled}
        placeholder="TODOを入力"
        value={inputText}
        onChange={setTextInForm}
      />
      <button disabled={isDisabled} onClick={addTodoToList}>
        登録
      </button>
    </div>
  );
};
