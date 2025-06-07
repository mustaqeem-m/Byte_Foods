import UserContext from "../utils/UserContext.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";
import { useContext } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent's - Constructor");
  }
  componentDidMount() {
    // console.log("Parent's - componentDidMount");
  }
  render() {
    // console.log("Parent's - Render");
    return (
      <div>
        <h1>Welcome to About Us Page</h1>
        <div>
          {
            <UserContext.Consumer>
            {(data) => {
                console.log(data);
            }
            }</UserContext.Consumer>
          }
      </div>
        <UserClass
          name={"Mohammed Mustaqeem"}
          Location={"Tuticorn"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Welcome to About Us</h1>
//       <UserClass
//         name={"Md_Mustaqeem(Class based Component)"}
//         Location={"Tirunelveli-class"}
//       />
//     </div>
//   );
// };

export default About;
