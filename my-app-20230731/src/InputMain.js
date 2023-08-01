import { useState } from "react";

function InputMain() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    // 변환될 값
    setText(event.target.value);
  };
  const handleReset = () => {
    setText("");
  };

  return (
    <div>
      <div>
        <b>값: {text}</b>
      </div>
      <input type="text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleReset}>
        초기화
      </button>
    </div>
  );
}

export default InputMain;
