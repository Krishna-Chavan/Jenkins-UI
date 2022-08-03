import React, {useState} from 'react'
import './content.css'
import { Link } from 'react-router-dom'

export default function Parameter(props) {

  return (
    <div>
        <table className="table table-bordered">
            <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.value}</td>
                    </tr>
            </tbody>
        </table>
    </div>
  )
}
