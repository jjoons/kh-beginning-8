import React, { useContext } from 'react'

/*
일반적으로 React 데이터 위에서 아래 (부모에서 자식) props를 통해 전달
여러 컴포넌트들에 전달해줘야 하는 prop 같은 경우 과정이 번거로울 수 있음
context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도
많은 컴포넌트가 이러한 값을 공유할 수 있게 함

context를 사용하면 중간에 element에게 props를 넘겨주지 않아도 됨
원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음

context를 사용하면 컴포넌트를 재사용하기 어려워짐

contextAPI를 사용하기 위해 Provider, Consumer, createContext를 알아야 함
  Provider: 생성한 context를 하위 컴포넌트에 전달하는 역할
  Consumer: context의 변화를 감시하는 컴포넌트
  createContext: Context 객체 생성
 */

// 객체 생성
export const AppContext = React.createContext({ name: '', job: '' })

function Children() {
  const c = useContext(AppContext)

  return (
    /*
      context 객체를 생성하고 생성된 context의 변화를 감시하는 컴포넌트
      상태 변화 감시
    */
    <AppContext.Consumer>
      {(user) => (
        <div>
          <h3>AppContext의 값의 name은 {user.name}입니다</h3>
          <h3>AppContext의 값의 job은 {user.job}입니다</h3>
        </div>
      )}
    </AppContext.Consumer>
  )
}

const UContext = () => {
  const user = {
    name: 'ㅇㅈㅅ',
    job: '무직',
  }

  return (
    /* 3. 생성한 context를 하위 컴포넌트에게 전달하는 역할 */
    <>
      <AppContext.Provider value={user}>
        <Children />
      </AppContext.Provider>
    </>
  )
}

export default UContext
