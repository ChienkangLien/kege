//新增
class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { name: this.state.value };

    fetch("/kege/UsersController", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((body) => {
        console.log(body);
      });
  }

  render() {
    return (
      <div>
        新增
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="name"
        />
        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

//刪除
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { name: this.state.value };

    fetch(`/kege/UsersController/${data.name}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((body) => {
        console.log(body);
      });
  }

  render() {
    return (
      <div>
        刪除
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="id"
        />
        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

//修改
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "" };
  }

  render() {
    return (
      <div>
        修改
        <input
          type="text"
          value={this.state.id}
          onChange={this.handleChangeForId.bind(this)}
          placeholder="id"
        />
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChangeForName.bind(this)}
          placeholder="name"
        />
        <button type="button" onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }

  handleChangeForId(event) {
    this.setState({ id: event.target.value });
  }

  handleChangeForName(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { u_id: this.state.id, name: this.state.name };

    fetch("/kege/UsersController", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.status === 422) {
          console.log("resp.status===" + resp.status);
        } else {
          return resp.json();
        }
      })
      .then((body) => {
        body != null ? console.log(JSON.stringify(body)) : alert("無此資料");
      });
  }
}

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
  }

  render() {
    return (
      <div>
        查一筆
        <input
          type="text"
          value={this.state.id}
          onChange={this.handleChange.bind(this)}
          placeholder="id"
        />
        <button type="button" onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`/kege/UsersController/${this.state.id}`)
      .then((resp) => {
        if (resp.status === 204) {
          console.log("resp.status===" + resp.status);
        } else {
          return resp.json();
        }
      })
      .then((body) => {
        alert(body != null ? JSON.stringify(body) : "無此資料");
      });
  }
}

class GetAll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        查全部
        <button type="button" onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`/kege/UsersController`)
      .then((resp) => {
        if (resp.status === 204) {
          console.log("resp.status===" + resp.status);
        } else {
          return resp.json();
        }
      })
      .then((body) => {
        // try {
        //   alert(JSON.stringify(body));
        // } catch (error) {
        //   alert("無資料");
        // }
        alert(body != null ? JSON.stringify(body) : "無資料");
      });
  }
}

class App extends React.Component {
  render() {
    return <h1>User Management System</h1>;
  }
}

ReactDOM.render(
  <>
    <App />
    <Insert />
    <br />
    <Delete />
    <br />
    <Update />
    <br />
    <Get />
    <br />
    <GetAll />
  </>,
  document.getElementById("root")
);

// class App extends React.Component {
//   render() {
//     // return React.createElement("input", {
//     //   type: "number",
//     //   onClick: this.clickHandler,
//     // });
//     return <input type="date" onClick={this.clickHandler.bind(this)}></input>;
//   }
//   clickHandler(e) {
//     console.log(this.state);
//   }
// }

// let inputElement = React.createElement(App, null);
// // let inputElement = <App />;
// ReactDOM.render(inputElement, document.getElementById("root"));
