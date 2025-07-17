import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

   // console.log(this.props.name);

    this.state = {
      userInfo:{
        name: "Dummy",
        location:"Default",
      },
    };
  }

  async componentDidMount(){

  const data = await fetch("https://api.github.com/users/vinitkumar90");
  const json = await data.json();

  this.setState({
    userInfo:json,
  })

  console.log(json);

  }

  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUnmount(){
    console.log("component will unmount");
    //for clean up clearTimer(variable)
  }

  render() {
    //const{uname} = this.props;
    const{name,location,avatar_url} = this.state.userInfo;

    return (
      <div className="User-card">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>location: {location}</h3>
        <h4>contact : vinit@hotmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
