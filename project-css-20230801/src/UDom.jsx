import { useEffect, useRef } from 'react'

/*
DOM 요소 접근
  로그인 화면이 보여질 때 id를 넣는 input을 굳이 클릭하지 않아도
  자동적으로 포커스가 되어 있게 해 주면 바로 키보드를 입력해서 id를 입력할 수 있도록 함
 */
const UDom = () => {
  const inputRef = useRef()
  useEffect(() => {
    console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const loginAlert = () => {
    alert('Welcome to my world. ' + inputRef.current.value)
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="id" />
      <button type="button" onClick={loginAlert}>
        Login
      </button>
    </div>
  )
}

export default UDom
