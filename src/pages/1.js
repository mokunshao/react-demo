import React from 'react';


class Example extends React.Component {
  state = {
    name: "boy",
    age: '99'
  };

  static getDerivedStateFromProps(props, state) {
    const { name, age } = state;
    const { name: name2, age: age2 } = props;
    const obj = {};
    if (name !== name2) {
      obj.name = name2;
    }
    if (age !== age2) {
      obj.age = age2;
    }
    return JSON.stringify(obj) === "{}" ? null : obj;
  }

  render() {
    return <div>
      <hr />
      {JSON.stringify(this.state)}
      <div>{this.state.name}</div>
      <div>{this.state.age}</div>
    </div>;
  }
}

export default class extends React.Component {
  state = { name: 'mike', age: '18' };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  getSnapshotBeforeUpdate(props, state) {
    return 'I am the snapshot!';
  }

  componentDidUpdate(props, state, snapshot) {
    console.log(snapshot);
  }

  render() {
    const { name, age } = this.state;
    const { changeName, changeAge } = this;
    return (<>
      <div>{JSON.stringify(this.state)}</div>
      <input type="text" value={name} onChange={changeName} />
      <input type="text" value={age} onChange={changeAge} />
      <Example name={this.state.name} age={this.state.age} />
    </>);
  }
}
