import React, { useState, useEffect } from 'react'

export default function AddProject() {

    const [projectName, setProjectName] = useState('');
    const [projectId, setProjectId] = useState('');
    const [environmanet, setenvironmanet] = useState('');
    const [description, setDescription] = useState('');
    const [buttonEnable, setButtonEnable] = useState(true);

    useEffect(() => {
        console.log('useEffect')
        validation();
    }, [projectId,projectName,environmanet,description])


    const handleInputChange = (e) => {
        if (e.target.id === 'projectName') setProjectName(e.target.value);
        if (e.target.id === 'projectId') setProjectId(e.target.value);
        if (e.target.id === 'projectEnv') setenvironmanet(e.target.value);
        if (e.target.id === 'description') setDescription(e.target.value);
        // validation();
    }

    const validation = () => {
        if (projectName !== '' && projectId !== '' && environmanet !== '' && description !== '') {
            setButtonEnable(false);
        } else {
            setButtonEnable(true);
        }
    }


    const reset = () => {
        console.log('button clicked');
        setProjectName('');
        console.log(projectName);
    }

    return (
        <div className='container' style={{
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            width: '800px',
            marginLeft: '200px',
            height: '300px',
            marginTop: '70px',
            borderRadius: '12px'
        }}>
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <div className="mb-2" style={{ marginTop: '50px' }}>
                        <input id="projectName" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2" style={{ marginTop: '50px' }}>
                        <input id="projectId" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Project Id" />
                    </div>
                </div>
                <div className="col-md-4 offset-md-1">
                    <div className="mb-2 mt-3">
                        <input id="projectEnv" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter the environment" />
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2 mt-3">
                        <input id="description" type="text" onChange={handleInputChange} className="form-control" placeholder="Project Description" />
                    </div>
                </div>
                <div className="mb-2 offset-md-3 mt-5">
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" style={{ borderRadius: '18px', width: '120px' }} disabled={buttonEnable} >Add Project</button>
                    <button id="btnAdd" data-testid="btnAdd" type="button"
                        className="btn btn-secondary"
                        style={{ borderRadius: '18px', width: '120px', marginLeft: '100px' }}
                        onClick={reset}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
