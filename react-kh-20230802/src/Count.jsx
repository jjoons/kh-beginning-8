import { useReducer } from 'react'

/*
useReducer: state가 너무 많아지거나 부모와 자식 ...
  관리를 해 줘서 빠르게 작업할 수 있게 도와주는 hook

  dispatch가 reducer를 호출함
  reducer는 store에 가서 현재 state 값을 가져와서 새로운 state로 반환함

  Component - (dispatch) > Action > Reducer > Store
  dispatch({ type: '값' })
  dispatch({ type: '값', data: '변경될 값' })
 */
const pl = {
  type: 'PLUS',
}

function Count() {
  const reducer = (state, action) => {
    console.log(action === pl)

    switch (action.type) {
      case 'PLUS':
        return state + 1
      case 'MINUS':
        return state - 1
      default:
        return state
    }
  }

  /*
  const [상태객체, 디스패치함수] = useReducer(reducer함수, 초기상태)
   */
  const [number, dispatch] = useReducer(reducer, 0)
  const onPlus = () => {
    dispatch(pl)
  }
  const onMinus = () => {
    dispatch({ type: 'MINUS' })
  }

  console.log('리렌더링')

  return (
    <div>
      <h3>{number}</h3>
      <button type="button" onClick={onPlus}>
        +
      </button>
      <button type="button" onClick={onMinus}>
        -
      </button>
    </div>
  )
}

export default Count
