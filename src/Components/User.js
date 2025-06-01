import { useState } from "react";
const User = ({ Location }) => {
  const [state_var_1] = useState(1);
  const [state_var_2] = useState(1);
  return (
    <div className="user-card">
      <h2>Name: Mohammed Mustaqeem</h2>
      <h3>Location: {Location}</h3>
      <h3>Contact: +91 8610679543</h3>
      <h3>mail: mmmusatqeem1910@gmail.com</h3>
      <h4>state_var_1 = {state_var_1}</h4>
      <h4>state_var_2 = {state_var_2}</h4>
    </div>
  );
};

export default User;
