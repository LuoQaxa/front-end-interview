// 有状态组件
import React, { Component } from 'react';

import Button from './Button';

const initialState = { clicksCount: 0, name: '' };

// type State = Readonly<typeof initialState>;
// 避免写两遍state的定义，可以写
type State = typeof initialState

class ButtonCounter extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { clicksCount } = this.state;
    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked me {clicksCount} times!
      </>
    );
  }

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);
}

// 将状态更新的函数提取到类的外部做为纯函数
// 可以简单测试这些状态更新函数是
// 并且定义为只读，阻止做一些状态的更改操作
const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});


