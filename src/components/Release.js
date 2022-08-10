import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export default function Release() {
    const [envavailabilitydate, setEnvavailabilitydate] = useState(null);
    const [deploymentdate, setDeploymentdate] = useState(null);
    const [codefreezedate, setCodefreezedate] = useState(null);
    const [releaseType, setReleseType] = useState('');
    const [releaseName, setReleaseName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [clarityRelease, setClarityRelease] = useState('');
    const [jirafix, setJirafix] = useState('');
    const [envname, setEnvname] = useState('');
    const [sprint, setSprint] = useState('');
    const [description, setDescription] = useState('');
    const [relType, setRelType] = useState([]);


    let navigate = useNavigate();
    const addBuildDetails = () => {
        fetch('http://localhost:3002/addRelease',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: uuidv4(), 
                                  envavailabilitydate, 
                                  deploymentdate, 
                                  codefreezedate,
                                  releaseType,
                                  releaseName,
                                  branchName,
                                  clarityRelease,
                                  jirafix,
                                  envname,
                                  sprint,
                                  description
                                })
        }).then(res => {
            navigate('/')
        })
    }

    useEffect(() => {
        fetch('http://localhost:3002/parameters')
        .then(res=>res.json())
        .then(data=>setRelType(data))
    }, [])
    
    console.log(relType)

    return (
        <div className='container mt-3'>
            <h3>Environment Readyness Pipeline</h3>
            <hr />
            <div className="card container" style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }} >
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <h6 className='nav-link' style={{ color: 'black' }}>Add Environment</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className='nav-link' style={{ color: 'black' }}>Add Release</h6>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {/* <div className="input-group col-md-4">
                        <input type="text" aria-label='Name' />
                        <input type="text" aria-label='Name' />
                    </div> */}
                    <div className="mt-5">
                        <div className="row g-2">
                            <div className="col-2 dropdown">
                                <div >
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Release Type</label>
                                    {/* <input type="text" className='dropdown-toggle' data-bs-toggle="dropdown" aria-label='Name'/>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul> */}
                                    <select style={{fontWeight:'normal',fontStyle:'italic'}} className='col-md-12' onChange={(e) => setReleseType(e.target.value)}>
                                        <option value="0" style={{fontWeight:'bold',fontStyle:'italic'}}>Select release type</option>
                                        {
                                           relType.map((v) => (
                                            <option>{v.releaseType}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Release Name</label>
                                    <input type="text" aria-label='Name' onChange={(e) => setReleaseName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Branch Name</label>
                                    {/* <input type="text" aria-label='Name' /> */}
                                    <select style={{fontWeight:'normal',fontStyle:'italic'}} className='col-md-12' onChange={(e) => setBranchName(e.target.value)}>
                                        <option value="0" style={{fontWeight:'bold',fontStyle:'italic'}}>Select branch</option>
                                        {
                                           relType.map((v) => (
                                            <option>{v.value}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Clarity Release</label>
                                    <input type="text" aria-label='Name' onChange={(e) => setClarityRelease(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Jira fix version</label>
                                    <input type="text" aria-label='Name' onChange={(e) => setJirafix(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="row g-2">
                            <div className="col-2">
                                <div>
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Envirnonment name</label>
                                    {/* <input type="text" aria-label='Name' /> */}
                                    <select style={{fontWeight:'normal',fontStyle:'italic'}} className='col-md-12' onChange={(e) => setEnvname(e.target.value)}>
                                        <option value="0" style={{fontWeight:'bold',fontStyle:'italic'}}>Select env name</option>
                                        {
                                           relType.map((v) => (
                                            <option>{v.envName}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>ENV availability</label>
                                    <input type="date" aria-label='Name' onChange={(e) => setEnvavailabilitydate(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Deployment</label>
                                    <input type="date" aria-label='Name' onChange={(e) => setDeploymentdate(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Code freeze</label>
                                    <input type="date" aria-label='Name' onChange={(e) => setCodefreezedate(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2" style={{ marginLeft: '30px' }}>
                                <div className="">
                                    <label style={{fontWeight:'bold',fontStyle:'italic'}}>Select sprint</label>
                                    {/* <input type="text" aria-label='Name' onChange={(e) => setSprint(e.target.value) } /> */}
                                    <select style={{fontWeight:'normal',fontStyle:'italic'}} className='col-md-12' onChange={(e) => setSprint(e.target.value)}>
                                        <option value="0" style={{fontWeight:'bold',fontStyle:'italic'}}>Select sprint</option>
                                        {
                                           relType.map((v) => (
                                            <option>{v.selectSprint}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label style={{ marginLeft: '15px',fontWeight:'bold',fontStyle:'italic' }}>Description</label>
                        <input type="text" placeholder='Description' style={{ width: '1000px', marginLeft: '15px', height: '40px' }} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='mt-3 text-center'>
                        <button type='button' className='btn btn-dark' style={{ borderRadius: '18px', width: '120px' }} onClick={addBuildDetails}>Add</button>
                        <button type='button' className='btn btn-outline-dark' style={{ borderRadius: '18px', width: '120px', marginLeft: '30px' }}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
