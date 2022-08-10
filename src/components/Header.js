import React from 'react'
import { Link } from "react-router-dom";
import './content.css'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Verizon</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/" >Projects</Link>
          <Link className="nav-link" to="/parameter">Parameters</Link>
          {/* <Link className="nav-link" to="/agent">Agent</Link> */}
          <Link className="nav-link" to="/release">Release</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}
