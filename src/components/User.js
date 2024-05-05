import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>count:{count}</h2>
      <h2>count2:{count2}</h2>
      <h2>Name:{name}</h2>
      <h2>location:{location}</h2>
      <h3>Contact: {contact}</h3>
    </div>
  );
};
export default User;
