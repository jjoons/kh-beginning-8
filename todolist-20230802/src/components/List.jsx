import { styled } from 'styled-components'
import { useTodoState } from '../Context'
import Item from './Item'

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`

const List = () => {
  const todos = useTodoState()

  return (
    <>
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </>
  )
}

export default List
