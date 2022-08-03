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
      <Link to="/addparameter" className="btn btn-primary mb-2 mt-3" type="submit">Add Parameter</Link>
      <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
              {
                params.map((p)=> (
                  <tr>
                    <td>{p.name}</td>
                    <td>{p.value}</td>
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
