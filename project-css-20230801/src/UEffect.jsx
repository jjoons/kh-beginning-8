import { useState } from 'react'
import Timer from './Timer'

/*
useEffect
  컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지에 대해 말한다
  React는 우리가 넘긴 함수(effect)를 기억했다가 DOM 업데이트 수행 이후 불러낼 것이다
  이렇게 useEffect 이후(마운트가 해제되는 때) 정리 실행

  첫번째 인자: Effect 함수
    호출 시점: 컴포넌트가 첫 렌더링 시
  두번째 인자: Dependency Array
    호출 시점: Array 내의 Element 값이 변경되었을 때
    값이 변경되는지 판단되는 시점
      ...
      컴포넌트가 렌더링될 때마다 선언해 놓은 useEffect 함수가 실행되고 (있다면)

  콜백 함수와 Dependency Array 파라미터로 전달
  그러면 useEffect 함수 내부 로직에 의해서 Dependency Array를 캐싱하고 있고
  ... Dependency Array의 Element와 비교한 뒤 다르면 첫번째 파라미터인 콜백을 반환하는 구조

  Dependency (의존성)
    코드에서 두 모듈간의 연결
    객체지향 언어에서는 두 클래스 간의 관계
    어떤 클래스 A가 다른 클래스 B를 이용할 때 A가 B에 의존한다
    Dependency Array를 비교하고 싶다면 useEffect가 실행된 이후
      1. (리)렌더링
      2. useEffect 함수 호출 (파라미터 콜백 함수, Dependency Array 전달)
      3. 이전 Dependency Array 비교
        여기에서 다른 시점이 발견되면 콜백 호출
        렌더링이 일어나지 않으면 콜백 함수가 실행되지 않음

  useEffect 함수를 만든 의도
    컴포넌트 상태(prop, state)의 상태 변화에 따라 상태를 이용해
    리액트와 관련없는 부수 작업(side effect 또는 API 호출) 등의 작업을 처리하기 위해 있음
*/
/*
State: 초기화 및 상태 설정
Ref: 유지
Effect: 계속적인 변화
 */
const UseEffect = () => {
  const [timer, setTimer] = useState(false)

  return (
    <div>
      {timer && <Timer />}
      <button type="button" onClick={() => setTimer((v) => !v)}>
        타이머
      </button>
    </div>
  )
}

export default UseEffect
