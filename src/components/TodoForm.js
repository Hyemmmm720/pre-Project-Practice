import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); //투두창 입력값

  const handleSubmit = (e) => {
    e.preventDefault(); //화면 새로고침 방지
    if (value.trim().length === 0) {
      return; // 공백 없앤 뒤 텍스트 없으면 추가 안 함
    }
    // 🔥 투두 추가하는 컴포넌트!!
    addTodo(value);
    // 투두 추가 후에 텍스트창 비우기
    setValue("");
  };
  return (
    // 투두 입력폼
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add Todo !"
      />
      <button type="submit" className="todo-btn">
        {/* // 투두제출 버튼 */}
        Add
      </button>
    </form>
  );
};
