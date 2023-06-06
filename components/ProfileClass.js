import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "",
        id: "",
      },
    };
    console.log("child-constructor" + this.props.name);
  }
  async componentDidMount() {
   //after 1st render
    const data = await fetch("https://api.github.com/users/Ramadevi-1432");
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo: json,
    })
    console.log("child-componentdidount" + this.props.name);
  }
  componentDidUpdate(){
    //after every next render
    console.log('componentdidupdate')

  }
  componentWillUnmount(){
    console.log('componentwillunmount')
  }

  render() {
    console.log("child-render" + this.props.name);
    return (
      <>
        <h1>I'm from profile class based component</h1>
        <h2>Name : {this.state.userInfo.login}</h2>
        <h2>ID : {this.state.userInfo.id}</h2>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Count
        </button>
      </>
    );
  }
}
export default Profile;
