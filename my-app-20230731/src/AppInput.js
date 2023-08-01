import React, { useState } from "react";

function AppInput() {
  /*
  const [초기변수명, 변화될_변수명] = 초기값
  useState("") 괄호 안에는 우리가 지정할 값을 적어준다
  */
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleJoin = () => {
    setName(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      {name === "" ? (
        <React.Fragment>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            onChange={handleChange}
            value={text}
          />
          <button type="button" onClick={handleJoin}>
            등록
          </button>
        </React.Fragment>
      ) : (
        <div>{name}님 환영합니다!</div>
      )}
    </div>
  );
}

export default AppInput;
