import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  // editTodo: 항목 수정 함수  task: 수정하고자 하는 투두리스트 객체

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // 투두 수정
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};

// EditTodoForm 컴포넌트는 editTodo와 task라는 두 개의 props를 받습니다. editTodo는 투두 항목을 수정하는 함수이고, task는 수정하고자 하는 투두 항목을 나타내는 객체입니다.

// EditTodoForm 컴포넌트는 useState hook을 사용하여 value라는 상태값을 정의합니다. value는 인풋 박스에 입력된 값으로 초기화됩니다.

// EditTodoForm 컴포넌트는 폼을 렌더링합니다. 폼에는 인풋 박스와 버튼이 포함되어 있습니다. 인풋 박스의 value prop은 value 상태값으로 설정되어 있습니다.

// 사용자가 인풋 박스에 값을 입력하면, onChange 이벤트 핸들러가 호출됩니다. 이벤트 핸들러에서 setValue 함수가 호출되어 value 상태값이 업데이트됩니다.

// 사용자가 폼을 제출하면, onSubmit 이벤트 핸들러가 호출됩니다. 이벤트 핸들러에서 editTodo 함수가 호출됩니다. editTodo 함수는 첫 번째 인수로 수정하고자 하는 투두 항목의 새로운 값인 value를 받고, 두 번째 인수로는 수정하고자 하는 투두 항목의 id를 받습니다.

// editTodo 함수가 투두 리스트에서 항목을 수정하면, 수정된 투두 리스트가 다시 렌더링됩니다.

// 폼이 다시 초기화됩니다. 인풋 박스의 value prop은 수정된 투두 항목의 새로운 값으로 설정됩니다.
