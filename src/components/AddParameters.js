import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export default function AddParameters() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [releaseType, setReleaseType] = useState('');
    const [envName, setEnvName] = useState('');
    const [selectSprint, setSelectSprint] = useState('');
    const [btnEnable, setBtnEnable] = useState(true)
    let errorObj = { name: '', value: '', releaseType: '', envName: '', selectSprint: '' };
    const [errors, setErrors] = useState(errorObj);

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        if (e.target.id === 'parameterName') setName(e.target.value);
        if (e.target.id === 'parameterValue') setValue(e.target.value);
        if (e.target.id === 'releaseType') setReleaseType(e.target.value);
        if (e.target.id === 'envName') setEnvName(e.target.value);
        if (e.target.id === 'sprint') setSelectSprint(e.target.value);
    }

    useEffect(() => {
        InputValidation();
    }, [name, value, releaseType, envName, selectSprint])


    function AddParametersHandler() {
        fetch('http://localhost:3002/parameters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: uuidv4(), name, value, releaseType, envName, selectSprint })
        }).then(res => {
            navigate('/parameter');
        });
    }

    const inputChangeHandle = (e) => {
        let error = false;
        const errObj = { ...errorObj };

        if (e.target.id === 'parameterName' && e.target.value === '') {
            // setName('key name is required');
            errObj.name = 'key name is required';
            error = true;
        }
        if (e.target.id === 'parameterValue' && e.target.value === '') {
            // setValue('value is required')
            errObj.value = 'value is required';
            error = true;
        }
        if (e.target.id === 'releaseType' && e.target.value === '') {
            // setReleaseType('release type is required')
            errObj.releaseType = 'release type is required';
            error = true;
        }
        if (e.target.id === 'envName' && e.target.value === '') {
            // setEnvName('environment name is required')
            errObj.envName = 'environment name is required';
            error = true;
        }
        if (e.target.id === 'sprint' && e.target.value === '') {
            // setSelectSprint('sprint value is required')
            errObj.selectSprint = 'sprint value is required';
            error = true;
        }
        setErrors(errObj);
        if (!error) {
            console.log('all fileds are filled')
        }
    }

    const InputValidation = (e) => {
        if (name !== '' && value !== '' && releaseType !== '' && envName !== '' && selectSprint !== '') {
            setBtnEnable(false);
        } else {
            setBtnEnable(true);
        }
    }

    return (
        <div className='container mt-5' style={{
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            width: '600px'
        }}>
            {/* <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div> */}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="mb-2 mt-2">
                        <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Key Name<span style={{ color: 'red' }}>*</span></label>
                        <input id="parameterName" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Name" onBlur={inputChangeHandle} />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </div>
                    <div className="mb-2">
                        <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Key Value<span style={{ color: 'red' }}>*</span></label>
                        <input id="parameterValue" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Value" onBlur={inputChangeHandle} />
                        {errors.value && <div style={{ color: 'red' }}>{errors.value}</div>}
                    </div>
                    <div className="mb-2">
                        <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Release Type<span style={{ color: 'red' }}>*</span></label>
                        <input id="releaseType" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Release Type" onBlur={inputChangeHandle} />
                        {errors.releaseType && <div style={{ color: 'red' }}>{errors.releaseType}</div>}
                    </div>
                    <div className="mb-2">
                        <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Environment Name<span style={{ color: 'red' }}>*</span></label>
                        <input id="envName" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Environmant Name" onBlur={inputChangeHandle} />
                        {errors.envName && <div style={{ color: 'red' }}>{errors.envName}</div>}
                    </div>
                    <div className="mb-2">
                        <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>sprint<span style={{ color: 'red' }}>*</span></label>
                        <input id="sprint" type="text" onChange={handleInputChange} className="form-control" placeholder="Enter Sprint" onBlur={inputChangeHandle} />
                        {errors.selectSprint && <div style={{ color: 'red' }}>{errors.selectSprint}</div>}
                    </div>
                    <div className="mb-2 text-center">
                        <button id="btnAdd" data-testid="btnAdd" type="button" disabled={btnEnable} className="btn btn-secondary" style={{ borderRadius: '18px' }} onClick={AddParametersHandler}>Add Parameter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
