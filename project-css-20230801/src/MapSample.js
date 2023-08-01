export default function MapSample() {
  const menus = ['마라탕', '바나커피', '새우볶음밥']
  /*
  Array.map
  각 배열의 요소를 돌면서 인자로 전달된 함수를 사용해서 처리된
  새로운 ...
    사용 방법
      const 변수 = 데이터.map((사용할_데이터_변수) => (데이터_변수))
  */
  const menuList = menus.map((data) => <li>{data}</li>)
  const menuList2 = menus.map((data) => <p>{data}</p>)

  /*
  key: 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용해야한다
  리액트에서 컴포넌트를 렌더링할 때 어떤 원소가 변경되었는지 빠르게 감지하기 위해서 사용
    만약 key가 설정되지 않았다면 가상 DOM이 순차적으로 비교하면서 감지하기 때문에
    key가 있을 때보다 속도가 느리다
  toString(): 가지고 있는 정보나 값들을 문자열로 만들어준다
   */
  const numbers = [1, 2, 3, 4, 5]
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ))

  const animals = [
    {
      key: 1,
      value: 'lion',
    },
    {
      key: 2,
      value: 'rabbit',
    },
    {
      key: 3,
      value: 'dog',
    },
  ]
  const animalList = animals.map((data, index) => (
    <li key={index}>{data.value}</li>
  ))

  return (
    <div>
      <ul>
        {menuList} {menuList2}
        {listItems}
        {animalList}
      </ul>
    </div>
  )
}
