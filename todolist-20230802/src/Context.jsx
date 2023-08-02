import { createContext, useContext, useReducer, useRef } from 'react'

/*
    Context 만들기
        state 와 dispatch 를 Context 통해 다른 컴포넌트에서 바로 사용 할 수 있게 해줄예정 
        하나의 Context 를 만들어서 state 와 dispatch 를 함께 넣어주는게 아니라 
        두개의 Context 를 만들어서 따로 따로 넣어줄 것 
        이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있음
        추가적으로, 사용하게 되는 과정에서 더욱 편리함

        contextAPI를 사용하기 위해 Provider Consumer, CreateContext 알아야함
        Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할
        Consumer : context의 변화를 감시하는 컴포넌트
        CreateContext : context 객체 생성
*/

const StateContext = createContext(null)
const DispatchContext = createContext(null)
const NextIdContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      )
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

/*
렌더링
  서버로부터 HTML 파일을 받아서 브라우저에 뿌려주는 과정

Context에서 사용할 값을 지정할 때는 아래와 같이 Provider 컴포넌트를 렌더링하고 value를 설정해 주면 된다
  props로 받아온 children 값을 내부에 렌더링해 줌
  이렇게 하면 다른 컴포넌트에서 state나 dispatch를 사용하고 싶을 때 다음과 같이 할 수 있다
  
  
 */
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inTodoList)
  const nextId = useRef(inTodoList[inTodoList.length - 1].id + 1)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NextIdContext.Provider value={nextId}>
          {children}
        </NextIdContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export function useTodoState() {
  return useContext(StateContext)
}

export function useDispatch() {
  return useContext(DispatchContext)
}

export function useNextId() {
  // Q 에러가 안난다는 보장이 있을까? 에러 수정 추가하기
  return useContext(NextIdContext)
}

/*
createContext
  생성한 context 객체를 원하는 클래스의 contextType 프로퍼티로 지정
  프로퍼티 이름이나 값을 가지고 있다 (key, value)
*/

const inTodoList = [
  {
    id: 1,
    text: '리액트 공부',
    done: true,
  },
  {
    id: 2,
    text: '영어 공부',
    done: true,
  },
  {
    id: 3,
    text: '사이트 제작',
    done: true,
  },
  {
    id: 4,
    text: 'CI/CD 배우기',
    done: false,
  },
]
