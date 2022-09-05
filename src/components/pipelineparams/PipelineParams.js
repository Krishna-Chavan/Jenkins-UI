import React, { useState, useEffect } from 'react';
import './PipelineParams.css';
import { Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'service 1',
    'service 2',
    'service 3',
    'service 4',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function PipelineParams(props) {
    const theme = useTheme();
    const [service, setService] = useState([]);
    const [data, setData] = useState([]);
    const [db, setDB] = useState([]);

    const [fromBranch, setFromBranch] = useState('');
    const [newBranch, setNewBranch] = useState('');
    const [env, setEnv] = useState('');
    const [operation, setOperation] = useState('CREATE');
    const [clusterName, setClusterName] = useState('');
    const [nameSpace, setNameSpace] = useState('');

    const inputChangeHandle = (e) => {
        if (e.target.id === 'env') setEnv(e.target.value);
        if (e.target.id === 'fbranch') setFromBranch(e.target.value);
        if (e.target.id === 'nbranch') setNewBranch(e.target.value);
        if (e.target.value === 'service') setService(e.target.value);
        if (e.target.id === 'operation') setOperation(e.target.value);
        if (e.target.id === 'cname') setClusterName(e.target.value);
        if (e.target.id === 'ns') setNameSpace(e.target.value);
    }

    const navigate = useNavigate();

    const addPipelineParams = () => {
        fetch('http://localhost:3002/addPipelinePaams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: uuidv4(), fromBranch, newBranch, env, service, operation, clusterName, nameSpace })
        }).then(res => {
            navigate('/projectbuilds')
        })
    }

    useEffect(() => {
        fetch('http://localhost:3002/addPipelinePaams')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // db= data.map();
    // console.log(`http://localhost:8080/job/parameter-automation/buildWithParameters?token=11021102beecfe536fd521b6cf2b5156d9&FROM_BRANCH=${db.fromBranch}&NEW_BRANCH=${db.newBranch}&SERVICE=${db.service}&ENV=${db.env}&OPERATION=${db.operation}&ClusterName=${db.clusterName}&NAMESPACE=${db.nameSpace}`)
    // // const runJob = () => {
    // //     // {
    // //     //     data.map((d,i) => 
    // //     //             // link = `http://localhost:8080/job/parameter-automation/buildWithParameters?token=11021102beecfe536fd521b6cf2b5156d9&FROM_BRANCH=${d.fromBranch}&NEW_BRANCH=${d.newBranch}&SERVICE=${d.service}&ENV=${d.env}&OPERATION=${d.operation}&ClusterName=${d.clusterName}&NAMESPACE=${d.nameSpace}`
    // //     //             (
    // //     //                 window.open(`http://localhost:8080/job/parameter-automation/buildWithParameters?token=11021102beecfe536fd521b6cf2b5156d9&FROM_BRANCH=${d.fromBranch}&NEW_BRANCH=${d.newBranch}&SERVICE=${d.service}&ENV=${d.env}&OPERATION=${d.operation}&ClusterName=${d.clusterName}&NAMESPACE=${d.nameSpace}`,'_blank')

    // //     //     ))
    // //     // }
    // //     console
    // // }


    const onClickRunFunctions = () => {
        addPipelineParams();
        // runJob();
    }



    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setService(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (props.trigger) ? (
        <div className='popup'>
            <div className='container' style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                width: '800px',
                marginLeft: '200px',
                height: '550px',
                marginTop: '30px',
                borderRadius: '12px',
                position: 'relative',
                backgroundColor: 'white'
            }}>
                <div className="row">
                    <div className='col-25'>
                        <label>FROM_BRANCH</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id='fbranch' onChange={inputChangeHandle} name='fromBranch' placeholder='select from branch' />
                    </div>
                </div>

                <div className="row">
                    <div className='col-25'>
                        <label>NEW_BRANCH</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id='nbranch' onChange={inputChangeHandle} name='newBranch' placeholder='select new branch' />
                    </div>
                </div>

                <div className="row">
                    <div className='col-25'>
                        <label>SERVICE</label>
                    </div>
                    <div className="col-75">
                        {/* <input type="text" id='fbranch' name='frombranch' placeholder='select services' /> */}
                        {/* <InputLabel id="demo-multiple-name-label">Service</InputLabel> */}
                        <Select
                            sx={{ width: 415 }}
                            labelId="demo-multiple-name-label"
                            id="service"
                            name='service'
                            multiple
                            value={service}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, service, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className="row">
                    <div className='col-25'>
                        <label>ENV</label>
                    </div>
                    <div className="col-75">
                        {/* <input type="text" id='env' name='env' placeholder='select environment' /> */}
                        <select name="env" id="env" defaultValue={"default"} onChange={inputChangeHandle}>
                            <option value={"default"} disabled>
                                selecr env
                            </option>
                            <option value="sit1">sit1</option>
                            <option value="sit2">sit2</option>
                            <option value="sit3">sit3</option>
                            <option value="dit1">dit1</option>
                            <option value="dit2">dit2</option>
                            <option value="dit3">dit3</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className='col-25'>
                        <label>OPERATION</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id='operation' value={"CREATE"} onChange={inputChangeHandle} name='operation' placeholder='write Operation' />
                    </div>
                </div>
                <div className="row">
                    <div className='col-25'>
                        <label>ClusterName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id='cname' name='clusterName' onChange={inputChangeHandle} value={env.replace(/[^0-9]/g, '') % 2 === 0 ? `eks-nsa-sow-${env}-hivv` : `eks-nsa-soe-${env}-hivv`} placeholder='select cluster name' />
                    </div>
                </div>
                <div className="row">
                    <div className='col-25'>
                        <label>NAMESPACE</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id='ns' name='nameSpace' onChange={inputChangeHandle} value={env.replace(/[^0-9]/g, '') % 2 === 0 ? `hivv-${env}w-nosse` : `hivv-${env}e-nosse`} placeholder='select name space' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div className="mt-3 mb-2">
                            <button
                                className='btn btn-secondary'
                                style={{ borderRadius: '18px', width: '120px', marginLeft: '250px' }}
                                onClick={addPipelineParams}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="mt-3 mb-2">
                            <button
                                className='btn btn-secondary'
                                style={{ borderRadius: '18px', width: '120px', marginLeft: '50px' }}
                                onClick={() => props.setTrigger(false)}
                            >
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
