import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import {v4 as uuidv4} from 'uuid';

export default function Addbuildstep() {

    // const [sn, setSn] = useState('')
    const [buildstep, setBuildstep] = useState('')
    const [description, setDescription] = useState('')
    const [jobname, setJobname] = useState('')

    let navigate=useNavigate();
    function AddParametersHandler() {
        fetch('http://localhost:3002/builds',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:uuidv4(),buildstep,description,jobname})
    }).then(res=>{
        navigate('/projectbuilds');
    });
    }

  return (
    <div className='container mt-3'>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                {/* <div className="mb-2">
                    <input id="txtid" type="text" onChange={(e)=>setSn(e.target.value)} className="form-control" placeholder="Enter snum"/>
                </div> */}
                <div className="mb-2">
                    <input id="txtstep" type="text" onChange={(e)=>setBuildstep(e.target.value)} className="form-control" placeholder="Enter build step"/>
                </div>
                <div className="mb-2">
                    <input id="txtdesc" type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter description"/>
                </div>
                <div className="mb-2">
                    <input id="txtdesc" type="text" onChange={(e)=>setJobname(e.target.value)} className="form-control" placeholder="Enter Job Name"/>
                </div>
                <div className="mb-2">
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" onClick={AddParametersHandler}>Add buildstep</button>
                </div>
            </div>
        </div>
    </div>
  )
}
