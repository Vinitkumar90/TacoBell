import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div className="About-container">
           
           <h1>Taco bell about us page </h1>
           <User name="vinit kumar(function)" />
            <UserClass name="vinit kumar(class)" location="chicksPur" />
        </div>
    )
}

export default About;