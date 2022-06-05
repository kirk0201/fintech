import React, { useState } from "react";
import Welcome from "./Welcome";

const ArrayMap = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: 12, height: 180 },
    { name: "동", age: 18, height: 180 },
    { name: "길동", age: 16, height: 180 },
  ]);

  return (
    <div>
      {users.map(({ name, age }, i) => (
        <Welcome username={name} age={age} key={i} />
      ))}
    </div>
  );
};

export default ArrayMap;
