import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {

  constructor(props) {
    super(props);
    console.log("about constructor");
  }

  componentDidMount(){
    console.log("about component did mount");
  }

  render() {
    console.log("about render");
    return (
      <div className="About-container">
        <h1>Taco bell about us page </h1>
        <UserClass uname="first(class)" location="chicksPur" />
      </div>
    );
  }

}

// const About = () => {
//     return(
//         <div className="About-container">

//            <h1>Taco bell about us page </h1>
//             <UserClass name="vinit kumar(class)" location="chicksPur" />
//         </div>
//     )
// }

export default About;
