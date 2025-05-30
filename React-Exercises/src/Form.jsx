import React, { useState } from 'react'



function Formo() {
const [form, setForm ] = useState('')  
 
    const handleChange = (event) => {
        const updatedForm = event.target.value
        setForm(updatedForm)

    }

    return (
      <form>
        <label> FORM : </label>
          <input  onChange={handleChange} />
            <h1> hello! {form}</h1>
      </form>
    );

}

export default Formo;