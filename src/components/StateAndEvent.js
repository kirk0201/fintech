import React, { useState } from "react";

const StateAndEvent = () => {
  const [text, setText] = useState("초기 값");
  const handleClick = (e) => {};
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>{text}</p>
      <input></input>
      <button>데이터변경</button>
    </div>
  );
};

export default StateAndEvent;
