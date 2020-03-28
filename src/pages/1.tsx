import * as React from 'react';

export default class extends React.Component {
  state = { name: 'mike', age: 18 };
  changeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ name: e.target.value });
  };
  changeAge: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ age: e.target.value });
  };
  render() {
    const { name, age } = this.state;
    const { changeName, changeAge } = this;
    return (<>
      <div>{JSON.stringify(this.state)}</div>
      <input type="text" value={name} onChange={changeName} />
      <input type="text" value={age} onChange={changeAge} />
    </>);
  }
}
