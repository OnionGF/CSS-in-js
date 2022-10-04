/*
 * @Author: onino
 * @Date: 2022-10-04 13:08:46
 * @LastEditors: onino
 * @LastEditTime: 2022-10-04 13:13:46
 * @Description: 请填写简介
 */

import { keyframes, css } from '@emotion/core'

const move = keyframes`
    0% {
        left:0; 
        top: 0;
        background: pink;
    }
    100% {
        top: 300px;
        left: 600px;
        background: skyblue;
    }
`

const box = css`
    width: 100px;
    height: 100px;
    position: absolute;
    animation: ${move} 4s ease infinite alternate;
`
function Box () {
    return <div css={box}>app move</div>
}

export default Box