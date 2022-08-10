import React, { useState } from 'react'

export default function AddProject() {

    const [projectName, setprojectName] = useState('');
    const [projectId, setProjectId] = useState('');
    const [environmanet, setenvironmanet] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className='container mt-5' style={{
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            width: '800px',
            marginLeft: '200px'
        }}>
            <div className="row">
                <div className="col-md-4">
                    <div className="mb-2 mt-2">
                        {/* <input id="txtKey" type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" /> */}
                        <input id="txtKey" type="text" onChange={(e) => setprojectName(e.target.value)} className="form-control" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2 mt-2">
                        {/* <input id="txtKey" type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" /> */}
                        <input id="txtKey" type="text" onChange={(e) => setProjectId(e.target.value)} className="form-control" placeholder="Enter Project Id" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-2 mt-2">
                        {/* <input id="txtKey" type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" /> */}
                        <input id="txtKey" type="text" onChange={(e) => setenvironmanet(e.target.value)} className="form-control" placeholder="Enter the environment" />
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2 mt-2">
                        {/* <input id="txtKey" type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" /> */}
                        <input id="txtKey" type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Project Description" />
                    </div>
                </div>
                <div className="mb-2 offset-md-7">
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" style={{ borderRadius: '18px', width: '120px' }} >Add Project</button>
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" style={{ borderRadius: '18px', width: '120px', marginLeft:'20px' }} >Cancel</button>
                </div>
            </div>
        </div>
    )
}
