import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const data = useContext(UserContext)
  
  return (
    <div>
      <h1>Welcome to Contact page, from here u can able to contact us</h1>
      <h3>{data.userName  }</h3>
    </div>
  );
};

export default Contact;
