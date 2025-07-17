import { useState } from "react";

const User = ({name}) =>{
    const[count,setCount] = useState(0);
    const[count2, setCount2] = useState(2)
    console.log("hello");
    return(
        <div className="User-card">
            {console.log("hello")}
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>location: chickspur</h3>
            <h4>contact : vinit@hotmail.com</h4>
        </div>
    )
}

export default User;