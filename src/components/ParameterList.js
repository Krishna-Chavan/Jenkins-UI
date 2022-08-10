import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function ParameterList() {

    const [params, setParams] = useState([])

    function AddContactFunction(para) {
      setParams([...params, para]);
    }

    useEffect(() => {
        fetch('http://localhost:3002/parameters')
        .then(res=>res.json())
        .then(data=>setParams(data));
     }, [])

  return (
    <div className='container'>
      <Link to="/addparameter" className="btn btn-primary mb-2 mt-3" type="submit" style={{borderRadius: '18px'}}>Add Parameter</Link>
      <table className="table table-bordered"style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }} >
            <thead>
                <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Value</th>
                    <th scope="col">Release Type</th>
                    <th scope="col">ENV name</th>
                    <th scope="col">Sprint</th>
                </tr>
            </thead>
            <tbody>
              {
                params.map((p)=> (
                  <tr key={p.name}>
                    <td>{p.name}</td>
                    {/* <td>
                    {/* <select className="custom-select" id="inputGroupSelect01">
                      <option selected>{p.value}</option>
                    </select>
                    </td> */} 
                    <td>{p.value}</td>
                    <td>{p.releaseType}</td>
                    <td>{p.envName}</td>
                    <td>{p.selectSprint}</td>
                  </tr>
                ))
              }
            </tbody>
      </table>
        {/* <div className="row">

          {
              params.map( item => <Parameter key={item.id} name={item.name} value={item.value}/> )
          }
        </div> */}
    </div>
  )
}
