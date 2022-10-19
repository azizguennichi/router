import React from 'react'
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <form>
  <label>
    Email:
    <input type="text" name="email" />
    password:
    <input type="password" name="password"></input>
  </label>
  <input type="submit" value="Submit" />
</form>
<Link to='/Home'>home</Link>
    </div>
  )
}

export default Signup