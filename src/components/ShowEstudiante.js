import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'


export default class ShowEstudiante extends Component {
  state = {
    users: [],
    idEstudiante: '',
    nombreEstudiante: '',
    apellidoEstudiante: ''
  }

  async getEstudiantes() {
    const res = await axios.get(backend.host + ':' + backend.port + '/estudiantes');
    this.setState({ users: res.data });
  }

  async componentDidMount() {
    await this.getEstudiantes();
    console.log(this.state.users);
  }

  onChangeId = (e) => {
    this.setState({
      idEstudiante: e.target.value
    })
  }

  onChangeNombre = (e) => {
    this.setState({
      nombreEstudiante: e.target.value
    })
  }

  onChangeApellido = (e) => {
    this.setState({
      apellidoEstudiante: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(backend.host + ':' + backend.port + '/estudiantes', {
        id: this.state.idEstudiante,
        nombre: this.state.nombreEstudiante,
        apellido: this.state.apellidoEstudiante
      })
      console.log(res);
    } catch (error) {
      alert(error.response.data);
    }

    this.getEstudiantes();
    this.setState({ idEstudiante: '' });
    this.setState({ nombreEstudiante: '' });
    this.setState({ apellidoEstudiante: '' });
  }

  // Función para eliminar un estudiante
  onDelete = async (e) => {
    const id = e.target.getAttribute('id'); // Obtener el id del estudiante
    try {
      const res = await axios.delete(backend.host + ':' + backend.port + `/estudiantes/${id}`);
      console.log(res);
      // Actualizamos la lista de estudiantes después de la eliminación
      this.getEstudiantes();
    } catch (error) {
      alert(error.response.data);
    }
  }

  render() {
    return (
      <div className="row mx-3">
        <div className="row mx-3">
          <div className="col-md-4">
            Formulario
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              {
                this.state.users.map(user => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={user.id}
                    id={user.id}
                    onDoubleClick={this.onDelete} // Doble clic para eliminar
                  >
                    {user.nombre + " " + user.apellido}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-body">
            <h4>Ingresar estudiante</h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control my-1"
                  value={this.state.idEstudiante}
                  placeholder="Id"
                  onChange={this.onChangeId}
                />
                <input
                  type="text"
                  className="form-control my-1"
                  value={this.state.nombreEstudiante}
                  placeholder="Nombre"
                  onChange={this.onChangeNombre}
                />
                <input
                  type="text"
                  className="form-control my-1"
                  value={this.state.apellidoEstudiante}
                  placeholder="Apellido"
                  onChange={this.onChangeApellido}
                />
              </div>
              <button className="btn btn-primary my-3" type='submit'>Guardar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
