import { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    /*
    setInterval: 애니메이션과 같이 반복되서 실행되는 함수의 지연을 설정하는데 사용
     */
    const timer = setInterval(() => {
      console.log('타이머 작동 중')
    }, 1000)

    return () => {
      console.log('타이머 작동 해제')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <span>타이머 시작!</span>
    </div>
  )
}

export default Timer
