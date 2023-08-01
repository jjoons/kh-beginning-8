import React, { useState } from "react";
import "./App.css";

function App() {
  /*
  Script 작성하는 부분
  CSS, JavaScript 문을 적는다
  변수 선언, 상태 변경은 여기에서 진행한다
  
  return 문에서는 HTML 문법만 적는다
   */

  /*   var name = "javascript";
  console.log(name);

  var name = "react";
  console.log(name);

  let name1 = "hello";
  console.log(name1);

  name1 = "world";

  const name2 = "vue";
  console.log(name2);

  name = "가능할까";
  console.log(name); */

  // let count = 0;
  /*
  const [초기값, 변환될값] = useState(초기값);
  useState(): 상태값 관리자 초기값 세팅, 값 변환 가능
  State
    - 컴포넌트 내부에서 선언한 값
    - setState를 통해서 내부 값을 변경할 수 있다
   */
  const [count, setCount] = useState(100);
  const [time, setTime] = useState(0);

  const updateTime = () => {
    setTime((v) => v + 1);
  };

  const plus = () => {
    // 값 증가
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };

  const minus = () => {
    // 값 감소
    // count = count - 1;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="App">
      {/* <p>안녕하세요</p> */}
      {/*
          <div className="App"> 는 <html> 태그와 비슷한 역할을 한다
          리액트에서는 onClick={} 으로 표기한다

          위에서 변수 선언한 값을 가져오기 위해서는
          {} 중괄호를 사용해서 변수값을 넣어준다
      */}
      <h2>{count}</h2>
      <button type="button" onClick={plus}>
        +
      </button>
      <button type="button" onClick={minus}>
        -
      </button>
      <h2>{time}시</h2>
      <button type="button" onClick={updateTime}>
        시간 올리기
      </button>
    </div>
  );
}

export default App;
