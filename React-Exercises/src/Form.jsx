import React, { useState } from "react";

function Formo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const updatedName = event.target.value;
    setName(updatedName);

    const handleChang = (event) => {
      const updatedEmail = event.target.value;
      setEmail(updatedEmail);
    };
  };

  return (
    <form>
      <label> NAME : </label>
      <input onChange={handleChange} />
      <h1> hello!, {name}</h1>

      <label>Email :</label>
 <input value={email} onChange={handleChang} />
    </form>
  );
}

export default Formo;
