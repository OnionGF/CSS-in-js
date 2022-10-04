import logo from './logo.svg';
import './App.css';
import  { css } from '@emotion/core';
import styled from '@emotion/styled';
import CSS from './Css';
import Demo from './Demo';
import MoveBox from './Box';
import { useTheme } from '@emotion/react';


const cssStyle = css`
  background: pink
`

const style = css`
    width: 100px;
    height: 100px;
    background: skyblue
  `

const style1 = css({
  width: 200,
  height: 200,
  background: 'pink'
})

const Button = styled.button`
  width: 100px;
  height: 50px;
  background: blue;
`

const Fancy = styled(Demo)`
  color: red
`

const themeColor = props => css`
  color: ${props.colors.primary}
`


function App() {
  const theme = useTheme()
  const themeColor1 = props => css`
    color: ${theme.colors.primary}
  `
  console.log(41, theme);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CSS css={cssStyle}/>
        // keyframes属性
        <MoveBox />
        <div
          css={style1}
        >hhhhh</div>
        <Button>我是一个按钮</Button>
        <Fancy />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          APP WORKS
        </a>

      </header>
      {/* // 主题 对象中存储的颜色 */}
      <div css={themeColor}> 我是用的主题 颜色</div>
      <div css={themeColor1}>勾子方式使用主题</div>
    </div>
  );
}

export default App;
