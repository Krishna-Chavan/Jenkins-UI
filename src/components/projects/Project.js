import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Project() {

    let navigate = useNavigate();
    const moveTo = () => {
        navigate('/projectbuilds')
    }
    return (
        <div>
            <Link to="/addProject" className="btn btn-primary mb-2 mt-3" type="submit" style={{marginLeft: '1050px',borderRadius: '18px', width: '120px'}}>
               Add Project
            </Link>
            <div class="card mt-3" style={{
                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                width: '300px',
                marginLeft: '30px'
            }}>
                <div class="card-header">
                    <h4 style={{ color: 'blue' }}>Jenkins Job</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Environment: Dev</h5>
                    <p>This is simple project to run jenkins job from UI</p>
                    <a href="#" class="btn btn-secondary" style={{ borderRadius: '18px', width: '120px' }} onClick={moveTo}>View Project</a>
                </div>
            </div>
        </div>
    )
}
