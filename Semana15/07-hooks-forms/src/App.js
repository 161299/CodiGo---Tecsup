import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function App() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (e) => {
    // console.log(e)
  }

  const validarEstado = (value) => {
    // console.log(value)
    if(value !== "complicado"){ return true}
    return false
  }

  const buscarUsuario = async  () => {
    const getapi = await axios("https://reqres.in/api/users?page=2")
    return getapi.data.data
  }

  const validarNombre = async (value) => {
    const data = await buscarUsuario()
    console.log(data);
    const arrUsuario = data.filter(user => {
      return user.first_name.indexOf(value) > -1
    })
    console.log( "filto", arrUsuario);
    if(arrUsuario.length === 0){
      return true
    }
    return false
    
  }

  validarNombre()



  return (
    <div className="container" >
        <div className="row  justify-content-center  mt-5 ">
          <div className="col-md-6 ">
            <h3>Formulario</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input type="text"  name="nombre" placeholder="Ingrese su nombre" ref={register({required: true, validate: validarNombre})}
                      className="form-control" />
                    {errors.nombre && <div className="alert alert-danger ">Este campo es requerido</div> }
                    {errors.nombre  && errors.nombre.type === "validate" && (<p>No existe</p>) }

              </div>
              <div className="form-group">
                <label htmlFor="">Apellido:</label>
                <input type="text"  name="apellido" placeholder="Ingrese su apellido" ref={register({required: true})}
                      className="form-control" />

                    {errors.apellido &&  <div className="alert alert-danger">Este campo es requerido</div>  }

              </div>
              <div className="form-group">
                <label htmlFor="">DNI:</label>
                <input type="number"  name="dni"  ref={register({required: true, minLength: 8, maxLength: 8})}
                      className="form-control" />
                  {errors.dni &&  errors.dni.type === "required"  &&( <p>El dni es obligatorio</p>)  }
                  {errors.dni && 
                  errors.dni.type === "minLength"  && 
                    (<p>El dni tiene que tener minimo 8 digitos</p>)  }
                  {errors.dni && 
                  errors.dni.type === "maxLength"  && 
                    (<p>El dni tiene que tener maximo 8 digitos</p>)  }

              </div>

              <div className="form-group">
                <label htmlFor="">Estado Civil</label>
                <select name="estadocivil"  ref={(register({validate: validarEstado }))}  className="form-control" >
                  <option value="casado">Casado</option>
                  <option value="soltero">Soltero</option>
                  <option value="complicado">Complicado</option>
                </select>
                {errors.estadocivil && errors.estadocivil.type === "validate" &&
                (<p>Quierete Diego.!</p>)}
              </div>

              <div className="form-group">
                <button className="btn btn-outline-success  form-control " type="submit"  >Agregar</button>
              </div>
            
            </form>

          </div>
        </div>
    </div>
  )
}

