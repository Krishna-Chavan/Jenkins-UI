import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './content.css'

export default function Content() {

    const [builds, setBuilds] = useState([])
    const [isActive, setIsActive] = useState([]);
    const [url, setUrl] = useState([]);
    const [status, setStatus] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/builds')
            .then(res => res.json())
            .then(data => setBuilds(data));
    }, [])

    // const fetchResult = () => {
    //     builds.map((data) => {
    //         fetch(`http://20.84.53.117:8080/job/${data.jobname}/lastBuild/api/json`)
    //         .then(res => res.json())
    //         .then(data => setStatus(data))
    //     })
    // }

    const fetchJobDetails = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => setStatus(data))
    }
    console.log(status);

    const handleCheckBox = (e) => {
        if (e.target.checked) {
            setIsActive([...isActive, e.target.id]);
            builds.map((data) => {
                if (data.sn === e.target.id)
                    setUrl([
                        ...url,
                        // `http://20.84.53.117:8080/job/${data.jobname}/build?token=1109e38f08a3ee512708f62aeec98bd943`,
                        `http://localhost:8080/job/secondjob/build?token=11021102beecfe536fd521b6cf2b5156d9`,
                    ]);
            });
        } else {
            isActive.map((_, index) => {
                if (isActive[index] === e.target.id) {
                    isActive.splice(index, 1);
                    url.splice(index, 1);
                    setIsActive([...isActive]);
                    setUrl([...url]);
                }
            });
        }
    };

    const multiUrl = () => {
        var urls = url
        // var jenkinsapi = require('jenkins-api');
        // var jenkins = jenkinsapi.init('https://admin:1109e38f08a3ee512708f62aeec98bd943@20.84.53.117:8080');
        // console.log(jenkins)
        for (let i = 0; i < urls.length; i++) {
            window.open(urls[i])
            fetch(`http://localhost:8080/job/secondjob/lastBuild/api/json?pretty=true?token=11021102beecfe536fd521b6cf2b5156d9`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa('admin:Krish@1209'),
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': "*",
                    'Access-Control-Allow-Origin': "*",
                    Token: '11021102beecfe536fd521b6cf2b5156d9'
                }),

            })
                .then(data => setStatus(data))
            if (status.result === "SUCCESS") {
                console.log("build is success and ready to run next job")
            }
        }
    }



    // const handleCheckBox = (e) => {
    //     // let tempList = this.state.List;
    //     builds.map((user) => (user.selected = e.target.checked));
    //     this.setState({
    //       MasterChecked: e.target.checked,
    //       List: builds,
    //       SelectedList: this.state.List.filter((e) => e.selected),
    //     });
    // }

    function AddBuildFunction(build) {
        setBuilds([...builds, build]);
    }

    //    function DeleteContactFunction(id) {
    //     let filteredbuilds = builds.filter(x => x.id !== id);
    //     setBuilds(filteredbuilds);
    //     fetch(`http://localhost:3002/builds/${id}`,{
    //         method:'DELETE'
    //     })
    // }

    // function handleJenkinsJob() {
    //     console.log("button clicked")
    //     fetch('http://20.84.53.117:8080/job/firstjob/build?token=1109e38f08a3ee512708f62aeec98bd943',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Authorization': '1109e38f08a3ee512708f62aeec98bd943'
    //         },
    //         body:JSON.stringify()
    //     }).then(res => {
    //         console.log("jenkins job called")
    //     })
    // }
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <div className='mleft'>
            <Link to="/addbuildstep" className="btn btn-secondary mb-2" type="button" style={{ borderRadius: '18px' }}>Add build step</Link>
            <button type='button' className='btn btn-secondary btnleft' style={{ borderRadius: '18px' }} onClick={() => openInNewTab('http://localhost:8080/job/Automatic-build-job/build?token=11021102beecfe536fd521b6cf2b5156d9')}>
                RUN ALL
            </button>
            <button type='button' style={{ borderRadius: '18px' }} className='btn btn-secondary btnleft' onClick={multiUrl}>RUN selected builds</button>
            <button type='button' style={{ borderRadius: '18px' }} className='btn btn-secondary btnleft' onClick={fetchJobDetails}>Fetch</button>
            {/* <div>
        <Link to={`http://20.84.53.117:8080/job/clonejob/buildWithParameters?token=1109e38f08a3ee512708f62aeec98bd943&Name=krishnaschavan`}>
            <button type='button' className='btn btn-success mb-2'>RUN ALL</button>
        </Link>
       </div> */}
            <table className="table table-bordered" style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}>
                <thead>
                    <tr>
                        <th scope="col">SI no</th>
                        <th scope="col">Build Step</th>
                        <th scope="col">Parameter Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        builds.map((b) => (

                            <tr key={b.sn} style={isActive.includes(b.sn) ? { background: 'lightgray' } : { background: 'white' }}>
                                <th scope="row">{b.sn}</th>
                                <td>{b.buildstep}</td>
                                <td>{b.description}</td>
                                <td>
                                    {/* <div className="dropdown"> */}
                                    {/* <a href={`http://20.84.53.117:8080/job/${b.jobname}/build?token=1109e38f08a3ee512708f62aeec98bd943`}>run job</a> */}
                                    {/* <a href={`http://20.84.53.117:8080/job/clonejob/buildWithParameters?token=1109e38f08a3ee512708f62aeec98bd943&Name=krishnaschavan`}>run job</a> */}
                                    <button type='button' className='btn btn-secondary' style={{ borderRadius: '18px' }} onClick={() => openInNewTab('http://20.84.53.117:8080/job/clonejob/buildWithParameters?token=1109e38f08a3ee512708f62aeec98bd943&Name=krishnaschavan')}>
                                        Run Job
                                    </button>
                                    <input type="checkbox" id={b.sn} className="disableRow btnleft" value="websitecheck" name="websitecheck" onChange={handleCheckBox} />
                                    {/* <button id="btnAdd" type="button" className="btn btn-success" style={{marginLeft:'20px', marginRight:'20px'}} onClick={handleJenkinsJob} >run</button> */}
                                    {/* <button id="btnAdd" type="button" className="btn btn-danger" style={{marginLeft:'20px', marginRight:'20px'}} onClick={DeleteContactFunction}>delete</button> */}
                                    {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        action
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item">enable build</a></li>
                                        <li><a className="dropdown-item">disable build</a></li>
                                    </ul>
                                </div> */}
                                </td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                    <th scope="row">1</th>
                    <td>Branch Creation</td>
                    <td>Jenkins job to create automatic branch</td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                action
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">enable build</a></li>
                                <li><a className="dropdown-item">disable build</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jenkis File Update</td>
                    <td>Updating the jenkins file based on env/k8s namespace</td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                action
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">enable build</a></li>
                                <li><a className="dropdown-item" href="#">disable build</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Auto merge enable</td>
                    <td>Job to enable automerge</td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                action
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">enable build</a></li>
                                <li><a className="dropdown-item" href="#">disable build</a></li>
                            </ul>
                        </div>
                    </td>
                </tr> */}
                </tbody>

            </table>
        </div>

    )
}
