/*
컴포넌트로 만들어진 함수는 다른 곳에서 재사용이 가능하다
리액트는 컴포넌트 위치와 상관없이 사용할 수 있다
정의를 내리고 
*/
function Greet() {
  return <p>안녕하세요!</p>;
}

function Foods() {
  return (
    <ul>
      <li>피자</li>
      <li>라면</li>
      <li>치킨</li>
    </ul>
  );
}

function Animals(props) {
  return <p>고양이와 {props.name}</p>;
}

function Proptype() {
  return (
    <div>
      <Greet />
      <Foods />
      <Animals name="강아지" />
    </div>
  );
}

export default Proptype;
