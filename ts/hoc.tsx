import * as  React from 'react';

// 创建了一个context
// context.Consumer, context.provider
// 将consumer映射到getcolor上去
const { Consumer: GetColor } = React.createContext("#000000");

// 定义一个高阶组件
const InjectColor = (Component) => class extends React.Component {
  public render() {
    return <GetColor>{ color => <Component { ...this.props } color = { color } />}</GetColor>;
    }
};

const InjectColor = (Component: React.ComponentType<{ color: string }>): React.ComponentClass<{}> =>
  class extends React.Component<any, any> {
    public render() {
      return <GetColor>{color => <Component {...this.props} color={color} />}</GetColor>;
    }
  };

class NeedColor extends React.Component<{ color: string }, {}> {
  public render() {
    return <div style={{ backgroundColor: this.props.color, height: 10, width: 10 }} />;
  }
}

class NeedColor extends React.Component<{ color: string, width: number }, {}> {
  public render() {
    return <div style={{ backgroundColor: this.props.color, height: 10, width: this.props.width }} />;
  }
}

type Exclude<T, U> = T extends U ? never : T;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const InjectColor =
  <Props extends { color: string }>(Component: React.ComponentType<Props>): React.ComponentClass<Omit<Props, "color">> =>
    class extends React.Component<Omit<Props, "color">, any> {
      public render() {
        return <GetColor>{color => <Component {...this.props} color={color} />}</GetColor>;
      }
    };


const Block = InjectColor(NeedColor);








