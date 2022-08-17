import React, { useState, useEffect } from 'react'
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
    const [btnEnable, setbtnEnable] = useState(true);
    const [relType, setRelType] = useState([]);
    let errorsObj = {
        envavailabilitydate: null, deploymentdate: null, codefreezedate: null, releaseType: '',
        releaseName: '', branchName: '', clarityRelease: '', jirafix: '', envname: '', sprint: ''
    }
    const [errors, setErrors] = useState(errorsObj);

    let navigate = useNavigate();

    useEffect(() => {
        handleInputValidation();
    }, [envavailabilitydate, deploymentdate, codefreezedate, releaseName, releaseType, branchName, clarityRelease,
        jirafix, envname, sprint, description
    ])


    const handleInputValidation = () => {
        if (envavailabilitydate !== '' && deploymentdate !== '' && codefreezedate !== '' && releaseType !== '' &&
            releaseName !== '' && branchName !== '' && clarityRelease !== '' && jirafix !== '' && envname !== '' &&
            sprint !== '' && description !== ''
        ) {
            setbtnEnable(false);
        } else {
            setbtnEnable(true);
        }
    }

    const handleInpChanges = (e) => {
        if (e.target.id === 'releaseType') setReleseType(e.target.value);
        if (e.target.id === 'branchName') setBranchName(e.target.value);
        if (e.target.id === 'releaseName') setReleaseName(e.target.value);
        if (e.target.id === 'clarityRelease') setClarityRelease(e.target.value);
        if (e.target.id === 'jiraFix') setJirafix(e.target.value);
        if (e.target.id === 'environmentName') setEnvname(e.target.value);
        if (e.target.id === 'envAvailability') setEnvavailabilitydate(e.target.value);
        if (e.target.id === 'deploymentDate') setDeploymentdate(e.target.value);
        if (e.target.id === 'codeFreez') setCodefreezedate(e.target.value);
        if (e.target.id === 'sprint') setSprint(e.target.value);
        if (e.target.id === 'description') setDescription(e.target.value);
    }

    const handleInputNullCheck = (e) => {
        let error = false;
        const errObj = { ...errorsObj };
        if (e.target.id === 'releaseType' && e.target.value === '') {
            errObj.releaseType = 'release type required';
            error = true;
        }
        if (e.target.id === 'branchName' && e.target.value === '') {
            errObj.branchName = 'branch name required';
            error = true;
        }
        if (e.target.id === 'releaseName' && e.target.value === '') {
            errObj.releaseName = 'release name required';
            error = true;
        }
        if (e.target.id === 'clarityRelease' && e.target.value === '') {
            errObj.clarityRelease = 'clarityRelease required';
            error = true;
        }
        if (e.target.id === 'jiraFix' && e.target.value === '') {
            errObj.jiraFix = 'jiraFix required';
            error = true;
        }
        if (e.target.id === 'environmentName' && e.target.value === '') {
            errObj.envname = 'environment name required';
            error = true;
        }
        if (e.target.id === 'envAvailability' && e.target.value === '') {
            errObj.envavailabilitydate = 'envAvailability date required';
            error = true;
        }
        if (e.target.id === 'deploymentDate' && e.target.value === '') {
            errObj.deploymentdate = 'deploymentDate required';
            error = true;
        }
        if (e.target.id === 'codeFreez' && e.target.value === '') {
            errObj.codefreezedate = 'codeFreez date required';
            error = true;
        }
        if (e.target.id === 'sprint' && e.target.value === '') {
            errObj.sprint = 'sprint value required';
            error = true;
        }
        setErrors(errObj);
        if (!error) {
            console.log('all fileds are filled')
        }
    }

    const addBuildDetails = () => {
        fetch('http://localhost:3002/addRelease', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: uuidv4(),
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
            .then(res => res.json())
            .then(data => setRelType(data))
    }, [])

    console.log(relType)

    return (
        <div>
            <h5 style={{ marginLeft: '30px', fontWeight: 'bold', fontStyle: 'italic' }}>Environment Readyness Pipeline</h5>
            <hr />
            <div className='container' style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                width: '800px',
                marginLeft: '200px',
                height: '600px',
                marginTop: '30px',
                borderRadius: '12px'
            }}>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div className="mb-2" style={{ marginTop: '50px' }}>
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Release Type<span style={{ color: 'red' }}>*</span></label>
                            <select id='releaseType' style={{ fontWeight: 'normal', fontStyle: 'italic' }} className='col-md-12' onChange={handleInpChanges} onBlur={handleInputNullCheck}>
                                <option value="0" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select release type</option>
                                {
                                    relType.map((v) => (
                                        <option>{v.releaseType}</option>
                                    ))
                                }
                            </select>
                            {errors.releaseType && <div style={{ color: 'red' }}>{errors.releaseType}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-2" style={{ marginTop: '50px' }}>
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Branch Name<span style={{ color: 'red' }}>*</span></label>
                            {/* <input type="text" aria-label='Name' /> */}
                            <select id='branchName' style={{ fontWeight: 'normal', fontStyle: 'italic' }} className='col-md-12' onChange={handleInpChanges} onBlur={handleInputNullCheck}>
                                <option value="0" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select branch</option>
                                {
                                    relType.map((v) => (
                                        <option>{v.value}</option>
                                    ))
                                }
                            </select>
                            {errors.branchName && <div style={{ color: 'red' }}>{errors.branchName}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Release Name<span style={{ color: 'red' }}>*</span></label>
                            <input id='releaseName' type="text" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.releaseName && <div style={{ color: 'red' }}>{errors.releaseName}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Clarity Release<span style={{ color: 'red' }}>*</span></label>
                            <input id='clarityRelease' type="text" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.clarityRelease && <div style={{ color: 'red' }}>{errors.clarityRelease}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Jira fix version<span style={{ color: 'red' }}>*</span></label>
                            <input id='jiraFix' type="text" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.jirafix && <div style={{ color: 'red' }}>{errors.jirafix}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Envirnonment name<span style={{ color: 'red' }}>*</span></label>
                            {/* <input type="text" aria-label='Name' /> */}
                            <select id='environmentName' style={{ fontWeight: 'normal', fontStyle: 'italic' }} className='col-md-12' onChange={handleInpChanges} onBlur={handleInputNullCheck}>
                                <option value="0" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select env name</option>
                                {
                                    relType.map((v) => (
                                        <option>{v.envName}</option>
                                    ))
                                }
                            </select>
                            {errors.envname && <div style={{ color: 'red' }}>{errors.envname}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>ENV availability<span style={{ color: 'red' }}>*</span></label>
                            <input id='envAvailability' type="date" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.envavailabilitydate && <div style={{ color: 'red' }}>{errors.envavailabilitydate}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Deployment<span style={{ color: 'red' }}>*</span></label><br />
                            <input id='deploymentDate' type="date" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.deploymentdate && <div style={{ color: 'red' }}>{errors.deploymentdate}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Code freeze<span style={{ color: 'red' }}>*</span></label><br />
                            <input id='codeFreez' type="date" aria-label='Name' onChange={handleInpChanges} onBlur={handleInputNullCheck} />
                            {errors.codefreezedate && <div style={{ color: 'red' }}>{errors.codefreezedate}</div>}
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-2 mt-3">
                            <label style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select sprint<span style={{ color: 'red' }}>*</span></label><br />
                            {/* <input type="text" aria-label='Name' onChange={(e) => setSprint(e.target.value) } /> */}
                            <select id='sprint' style={{ fontWeight: 'normal', fontStyle: 'italic' }} className='col-md-12' onChange={handleInpChanges} onBlur={handleInputNullCheck}>
                                <option value="0" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select sprint</option>
                                {
                                    relType.map((v) => (
                                        <option>{v.selectSprint}</option>
                                    ))
                                }
                            </select>
                            {errors.sprint && <div style={{ color: 'red' }}>{errors.sprint}</div>}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label style={{ marginLeft: '70px', fontWeight: 'bold', fontStyle: 'italic' }}>Description</label><br />
                        <input id='description' maxLength={4000} type="text" placeholder='Description' style={{ width: '600px', marginLeft: '70px', height: '80px' }} onChange={handleInpChanges} />
                    </div>
                    <div className="mb-2 offset-md-3 mt-3">
                        <button id="btnAdd" data-testid="btnAdd" type="button"
                            className="btn btn-secondary"
                            style={{ borderRadius: '18px', width: '120px' }}
                            onClick={addBuildDetails}
                            disabled={btnEnable}
                        >
                            Add Project
                        </button>
                        <button id="btnAdd" data-testid="btnAdd" type="button"
                            className="btn btn-secondary"
                            style={{ borderRadius: '18px', width: '120px', marginLeft: '100px' }}
                            onClick={() => window.location.reload(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
