import React, { useState } from 'react'

const NextPage = () => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [age,setAge]=useState('');
  const [address,setAddress]=useState('');
  return (
    <div>
      <center>
      <h1>Add User</h1>

      <form>
  <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">First Name</label>
    <input type="text" class="form-control" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
  </div>
    <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">Last Name</label>
    <input type="text" class="form-control"/>
  </div>
    <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">Email address</label>
    <input type="email" class="form-control"/>
  </div>

    <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">Password</label>
    <input type="password" class="form-control"/>
  </div>
    <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">Age</label>
    <input type="number" class="form-control"/>
  </div>
    <div class="mb-3" style={{width:"400px"}}>
    <label class="form-label">Address</label>
    <input type="text" class="form-control"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</center>
    </div>
  )
}

export default NextPage
 
// git stash recover code 
  // git stach pop updata all code