import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './content.css'

export default function Content() {

    const [builds, setBuilds] = useState([])
    const [state, setState] = useState(false)

    // const handleCheckBox =(e) => {
    //     console.log(e);
    //     setState(e.target.checked)
    // }

    const handleCheckBox = (e) => {
        // let tempList = this.state.List;
        builds.map((user) => (user.selected = e.target.checked));
        this.setState({
          MasterChecked: e.target.checked,
          List: builds,
          SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    function AddBuildFunction(build) {
        setBuilds([...builds, build]);
      }
  
      useEffect(() => {
          fetch('http://localhost:3002/builds')
          .then(res=>res.json())
          .then(data=>setBuilds(data));
       }, [])

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

  return (
    <div className='mleft'>
       <Link to="/addbuildstep" className="btn btn-primary mb-2" type="button">Add build step</Link>
       <table className="table table-bordered">
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

                        <tr  key={b.sn} style={state ? {'color':'black'} : {'color':'lightgray'}}>
                            <th scope="row">{b.sn}</th>
                            <td>{b.buildstep}</td>
                            <td>{b.description}</td>
                            <td>
                                {/* <div className="dropdown"> */}
                                <a href={`http://20.84.53.117:8080/job/${b.jobname}/build?token=1109e38f08a3ee512708f62aeec98bd943`}>run job</a>
                                <input type="checkbox" id={b.sn} className="disableRow" value="websitecheck" name="websitecheck" onChange={handleCheckBox} />
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
