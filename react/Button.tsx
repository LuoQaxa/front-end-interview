import React, { MouseEvent, SFC } from 'react'
type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  
}

// button是一个无状态组件，并且定义它的函数为() => {}
const Button: SFC<Props> = ({ onClick: handleClick, children }) => {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}


export default Button;


