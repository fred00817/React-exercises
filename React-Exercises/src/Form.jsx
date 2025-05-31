import React, { useState } from "react";

function Formo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const updatedName = event.target.value;
    setName(updatedName);
  };
  const handleChang = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  };

  const handleCha = (event) => {
    const updatedPassword = event.target.value;
    setPassword(updatedPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
console.log("Form Submitted");
console.log("Name", name);
console.log("Email", email);
console.log("Password", password);
   
    setName('')
    setEmail('')
   setPassword('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> NAME : </label>
      <input type='text' value={name} onChange={handleChange} />
      <h6> hello!, {name}</h6>

      <label>EMAIL :</label>
      <input type="email" value={email} onChange={handleChang} />
      <h6>This is the my Email : {email}</h6>

      <label>Password:</label>

      <input type="password" value={password} onChange={handleCha} />

      <h6>this my passWord: {password}</h6>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Formo;
