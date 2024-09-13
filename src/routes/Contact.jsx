import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

function Contact() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");

  const handleSignup = () => {
    if(name.length < 2)
      alert("The name must contain minimum 3 characters!")
    if(mesaj.length < 9)
      alert("The message must contain minimum 10 characters!")
  }

  return (
    <div className='content'>
      <form>
      <label htmlFor="nume">Nume</label>
        <input type="text" id='nume' value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="mesaj">Mesaj</label>
        <textarea name="mesaj" id="mesaj" value={mesaj} onChange={(e) => setMesaj(e.target.value)}></textarea>
        <button type='submit' onClick={handleSignup}>Submit</button>
      </form>
      
    </div>
  )

}
export default Contact
