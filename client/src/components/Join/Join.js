import  { useState } from 'react'
import { Link } from 'react-router-dom'
import './join.css'

const Join = () => {
  const [name, Setname] = useState('');
  const [room, Setroom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>
          <div>
            <input required placeholder='Name' className='joinInput' type='text' onChange={(event) => { Setname(event.target.value) }} />
          </div>
          <div>
            <input required placeholder='Room' className='joinInput mt-20' type='text' onChange={(event) => Setroom(event.target.value)} />
          </div>
        </h1>
        <Link to={`/Chat?name=${name}&room=${room}`}>
          <button className='button mt-20' type='submit'>SignIn</button>
        </Link>
      </div>

    </div >
  )
}

export default Join
