import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export default function AddParameters() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  let history=useHistory();
    function AddParametersHandler() {
        fetch('http://localhost:3002/parameters',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:uuidv4(),name,value})
    }).then(res=>{
        history.push('/parameter');
    });
    }

  return (
    <div className='container mt-3'>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="mb-2">
                    <input id="txtKey" type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Key"/>
                </div>
                <div className="mb-2">
                    <input id="txtValue" type="text" onChange={(e)=>setValue(e.target.value)} className="form-control" placeholder="Enter Value"/>
                </div>
                <div className="mb-2">
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" onClick={AddParametersHandler}>Add Parameter</button>
                </div>
            </div>
        </div>
    </div>
  )
}
