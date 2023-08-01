npx: 폴더 설치 초기에 패키지를 최신으로 업데이트
npm start: 리액트를 시작한다
만약 `npm start`를 종료하고 다시 실행시키고 싶으면 Terminal에서 `Ctrl + C`를 여러 번 누르면 된다

### React 정리

- Node.js: 패키지 관리자 (리액트 이외 다양한 패키지 설치 가능)
- npx: 최신 패키지 설치이기 때문에 초반에 폴더를 만들어줄 때 사용하는 명령어
  `npx create-react-app [폴더명]`
- npm (Node Package Manager): 전반적으로 build, test, start, install 등 다방면으로 사용하는 명령어
  프로젝트 시작하는 명령어: `npm start` 또는 `npm run start` 또는 `npm run dev`
  추가적으로 필요한 패키지 설치하는 명령어 `npm install [패키지명]`
- package.json: 간략한 사용 설명서
- package-lock.json: 자세히 적힌 사용 설명서
- README.md: 프로젝트에 대해 사람이 전반벅으로 설명하는 공간
- .gitignore: GitHub에 파일을 업로드할 때 업로드하지 말아야할 이름이나 확장자를 작성한다

### 파일에 대해서 작성

리액트는 초반에 index.html 파일만 바라본다
index.js에서 사용할 JavaScript 파일을 불러온다
그 다음 App.js와 같은 파일을 만들어서 컴포넌트를 작성한다
파일 이름은 개발자의 자유이다

### 폴더 구조

node_modules: 패키지 모음. 이 폴더 안에 react가 들어있다
public: 가장 처음에 보여지는 폴더
src: 우리가 원하는 코드를 작성하는 폴더

### 리액트 장점

Virtual DOM: DOM을 추상화한 가상의 객체
SPA (Single Page Application): 단일 페이지로 처리 (index.html)
웹으로 모바일 앱도 만들 수 있다
JSX (JavaScript XML): 코드를 컴퓨터에 맞게 변환해 준다

### 컴포넌트 작성 방법

```jsx
function 이름() {
  // 스크립트 및 스타일 작성
  const [기본값, 변경될_값] = 초기기본값;
  const 동작할_이름 = () => {
    // 변경될_값
  };

  /*
  만약 input 처럼 넣어줘야 하는 값을 있을 경우
  */
  const 동작할_이름2 = (event) => {
    변경될_값(event.target.value);
  };

  return <div>내용을 채워준다</div>;
}

export default 이름;
```

### ㅁ

1. 이름 변경하는 컴포넌트 만들기
2. 음식점 출력하기 (마지막 수업시간 배열 활용)
