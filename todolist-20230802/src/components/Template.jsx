import { styled } from 'styled-components'

export const TemplateBlock = styled.div`
  width: 720px;
  height: 820px;
  /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  position: relative;
  background-color: white;
  /* 페이지 중앙에 나타나도록 설정 */
  margin: 0 auto;
`
const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>
}

export default Template
