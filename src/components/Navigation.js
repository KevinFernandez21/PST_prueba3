import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">PST - P106</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/estudiantes">Estudiantes</Link>
            <Link className="nav-link " to="/profesores" tabindex="-1" aria-disabled="true">Profesores</Link>
          </div>
        </div>
        </div>
      </nav>
    )
  }
}
