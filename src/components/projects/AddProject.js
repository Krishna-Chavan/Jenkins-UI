import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function AddProject() {

    const [projectName, setProjectName] = useState('');
    const [projectId, setProjectId] = useState('');
    const [environmanet, setenvironmanet] = useState('');
    const [description, setDescription] = useState('');
    const [buttonEnable, setButtonEnable] = useState(true);
    let errorsObj = {projectName:'',projectId:'',environmanet:'',description:''}
    const [errors, setErrors] = useState(errorsObj);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('useEffect')
        validation();
    }, [projectId,projectName,environmanet,description])

    const addApplication = () => {
        fetch('http://localhost:3002/addApplication',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: uuidv4(),projectName,projectId,environmanet,description})
        }).then(res => {
            navigate('/');
        })
    }

    const handleInputChange = (e) => {
        if (e.target.id === 'projectName') setProjectName(e.target.value);
        if (e.target.id === 'projectId') setProjectId(e.target.value);
        if (e.target.id === 'projectEnv') setenvironmanet(e.target.value);
        if (e.target.id === 'description') setDescription(e.target.value);
        // validation();
    }

    const inputChangeHandle = (e) => {
        let error = false;
        const errObj = {...errorsObj};
        if(e.target.id === 'projectName' && e.target.value === ''){
            errObj.projectName = 'project name required';
            error = true;
        }
        if(e.target.id === 'projectId' && e.target.value === ''){
            errObj.projectId = 'project required';
            error = true;
        }
        if(e.target.id === 'projectEnv' && e.target.value === ''){
            errObj.environmanet = 'environment required';
            error = true;
        }
        if(e.target.id === 'description' && e.target.value === ''){
            errObj.description = 'description required';
            error = true;
        }
        setErrors(errObj);
        if(!error){
            console.log('all fileds are filled')
        }
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
                        <input id="projectName" type="text" onChange={handleInputChange} onBlur={inputChangeHandle} className="form-control" placeholder="Enter Project Name" />
                        {errors.projectName && <div style={{ color: 'red' }}>{errors.projectName}</div>}
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2" style={{ marginTop: '50px' }}>
                        <input id="projectId" type="text" onChange={handleInputChange} onBlur={inputChangeHandle}  className="form-control" placeholder="Enter Project Id" />
                        {errors.projectId && <div style={{ color: 'red' }}>{errors.projectId}</div>}
                    </div>
                </div>
                <div className="col-md-4 offset-md-1">
                    <div className="mb-2 mt-3">
                        <input id="projectEnv" type="text" onChange={handleInputChange} onBlur={inputChangeHandle}  className="form-control" placeholder="Enter the environment" />
                        {errors.environmanet && <div style={{ color: 'red' }}>{errors.environmanet}</div>}
                    </div>
                </div>
                <div className="col-md-4 offset-md-2">
                    <div className="mb-2 mt-3">
                        <input id="description" type="text" onChange={handleInputChange} onBlur={inputChangeHandle}  className="form-control" placeholder="Project Description" />
                        {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
                    </div>
                </div>
                <div className="mb-2 offset-md-3 mt-5">
                    <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" style={{ borderRadius: '18px', width: '120px' }} disabled={buttonEnable} onClick={addApplication} >Add Project</button>
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
