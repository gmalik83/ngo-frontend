import React, { useEffect, useState } from 'react'
const url = 'http://localhost:5000';
function Modal({handleModalToggle,id}) {
    
    const [userData,setUserData] = useState('');

    const getData = async(id) => {
        const res = await fetch(`${url}/api/user/getmod?id=${id}`);

        const data = await res.json();
        setUserData(data);

    }

    useEffect(() => {
        
        getData(id);

    },[])

  return (
      <div>
          {userData ? <div className='modalBackground'>
    <div className='modalContainer'>
        <button>X</button>
    <div className='title'>
        <h3> Following Details are received:</h3>
        </div>
        <div className='body'>
            <h3>DETAIL OF USER</h3>
            <div className='container'>
                <h3>{userData.name}</h3>
            </div>
        </div>
        <div className='footer'>
            <button className='btn btn-primary mr-3 '>Approve</button>
            <button className='btn btn-danger mr-3'>Reject</button>
            <button className='btn btn-warning'>Close</button>
        </div>

    </div>
        
    </div> : <h1>Trouble fetching data</h1>}
      </div>
    
  )
}

export default Modal