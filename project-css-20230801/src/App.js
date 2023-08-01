import { SvgIcon } from '@mui/material'

/*
import ... from 다음에 폴더를 가져올 때 "./"는 현재 폴더를 가리킨다

HTML: class
React: className

CSS는 따로 .css 형태를 만들어서 className으로 태그 이름을 지정해 주고
스타일을 적용할 수 있다
 */

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

function App() {
  /* 
  const Component = styled.div`
    display: grid;
  `*/

  return (
    <div>
      {/* <Button variant="contained">Hello World</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <br />
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
      {/*       <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} /> */}
    </div>
  )

  /*
  return (
    <div>
      <h3 className="header_box">CSS 꾸미기</h3>
      <p className={styles.header_box}>asdasd</p>
      <Component>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Component>
      <div>
        <button>BUTTON</button>
      </div>
    </div>
  ) */
}

export default App
