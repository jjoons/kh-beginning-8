import { useEffect, useState } from 'react'

function UnmountSample() {
  useEffect(() => {
    console.log('UnmountSample 마운트 됨')

    return () => {
      // Unmount 시점에서 실행됨
      console.log('UnmountSample 언마운트')
    }
  }, [])

  return <div>Unmount 제거 컴포넌트</div>
}

/*
코드가 생성되고 변화되는 시점
*/
const UEffectSample = () => {
  /*
  count에 사용할 const state, input에 사용될 text state
  */
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // unmount const
  const [isUnmount, setIsUnmount] = useState(false)
  const toggle = () => {
    setIsUnmount((v) => !v)
  }

  // 1. Mount 탄생 시점
  /*
  버튼은 계속 눌리지만 콘솔에서는 한번만 실행되는 것을 확인할 수 있다
  업데이트는 누르는 만큼 업데이트된다

  컴포넌트가 탄생(mount) 시점에 콘솔이 실행되고
  다른 값을 넣었을 때 (클릭이나 input 값을 넣었을 때)
  콘솔을 확인해 보면 한번만 뜨는 것을 볼 수 있다
  */
  useEffect(() => {
    console.log('Mount 생성되었습니다')

    return () => {
      console.log('Unmount 소멸되었습니다')
    }
  }, [])

  // 2. 업데이트 시점
  /*
  업데이트는 생성과 달리 업데이트될 때마다 콘솔 창에 나타나는 것을 확인할 수 있다
  */
  useEffect(() => {
    console.log('카운트 업데이트: ', count)
    if (count > 10) {
      alert('최대 수량은 10개 입니다')
      setCount(10)
    }
  }, [count])

  useEffect(() => {
    console.log('텍스트 업데이트: ', text)
  }, [text])

  return (
    <div>
      {/* 생성 업데이트 */}
      <div>
        {/*
      기존에 onClick, onChange에 들어가는 함수를 따로 입력해 주었지만
      onClick이나 onChange 안에 바로 넣을 수 있다
      */}
        {count}
        <button type="button" onClick={() => setCount((v) => v + 1)}>
          +
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* 소멸 */}
      <div>
        <button onClick={toggle}>On/Off</button>
        {isUnmount && <UnmountSample />}
      </div>
    </div>
  )
}

export default UEffectSample
