import { useRef, useState } from 'react'

/*
useRef
  변수 관리 DOM 요소에 접근을 위해 사용되는 React hook
  Ref는 Reference의 약자로 참조를 의미
  React 컴포넌트는 State가 변할 때마다 리렌더링이 되면서 컴포넌트 내부 변수들이 초기화된다
  컴포넌트 내부 변수들이 초기화가 된다는 것은 해당 컴포넌트 함수의 변수들이
  모든 함수 로직들이 다시 실행되는 것을 의미

  그렇다면 State 대신 Ref 안에 값을 저장하면 어떻게 될까
    Ref 값들은 아무리 변경해도 컴포넌트를 다시 렌더링되지 않는다
    그로 인해 불필요한 렌더링을 막을 수 있다
    값이 보존되고 유지된다

  DOM 요소에 접근
    예를 들어 로그인 화면이 보였을 때 id를 넣는 input을 굳이 클릭하지 않아도 자동적으로
    포커스가 되어 있게 해 주면 바로 키보드를 입력해서 id를 ...


useEffect
*/
export default function Use() {
  /*
  각각의 Ref Up 버튼과 Var Up 버튼을 클릭하면 콘솔의 값이 증가하는 것을 볼 수 있다
  하지만 Render 버튼을 클릭하지 않으면 화면에 업데이트 되지 않는다

  화면에서 Ref의 값이 "7"이고 Var의 값이 "5"일 때 Render 버튼을 클릭했을 때
  Ref는 "7"이 표시되지만 Var는 "0"으로 표시된다
  왜냐하면 렌더링이 될 때마다 컴포넌트 함수 내부에 있는 변수들이 초기화되기 때문이다
  Ref의 값은 컴포넌트의 전 생애 주기(라이프사이클)를 통해 유지
  컴포넌트가 브라우저에 마운트된 시점부터 언마운트될 때까지 같은 값을 유지할 수 있기 때문이다

  마운트: 연결시켜 주는 과정
  컴포넌트 생애 주기: 생성 (mount) > 업데이트 (update) > 제거 (unmount)
  */

  const [render, setRender] = useState(false)
  // 값이 countRef.current에 저장된다
  const countRef = useRef(0)
  let countVar = 0

  /*
  Ref.current: 최신 상태 유지
  */
  console.log('렌더링 후 Ref: ', countRef.current)
  console.log('렌더링 후 Var: ', countVar)

  const increaseRef = () => {
    countRef.current += 1
    console.log('ref up: ', countRef.current)
  }
  const increaseVar = () => {
    countVar += 1
    console.log('var up: ', countVar)
  }
  const doRender = () => {
    setRender((v) => !v)
  }

  return (
    <div>
      <header>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>
      </header>
      <button onClick={increaseRef}>Ref up</button>
      <button onClick={increaseVar}>Var up</button>
      <button onClick={doRender}>Render</button>
    </div>
  )
}
