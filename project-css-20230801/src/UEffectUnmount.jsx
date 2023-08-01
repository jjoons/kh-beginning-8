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
const UEffectUnmount = () => {
  // unmount const
  const [isUnmount, setIsUnmount] = useState(false)
  const toggle = () => {
    setIsUnmount((v) => !v)
  }

  return (
    <div>
      {/* 소멸 */}
      <div>
        <button onClick={toggle}>On/Off</button>
        {isUnmount && <UnmountSample />}
      </div>
    </div>
  )
}

export default UEffectUnmount
