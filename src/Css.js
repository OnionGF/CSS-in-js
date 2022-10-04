/*
 * @Author: onino
 * @Date: 2022-10-04 11:33:44
 * @LastEditors: onino
 * @LastEditTime: 2022-10-04 11:38:09
 * @Description: 请填写简介
 */

import React from 'react';
import { css } from '@emotion/core'

const style = css`
    width: 100px;
    height: 200px;
    background: skyblue;
`
function Css(props) {
    return <div css={style} {...props}> css - in - js </div>
}

export default Css;