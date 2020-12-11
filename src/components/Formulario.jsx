import React, { useState } from 'react'
import { Grid, TextField, Button} from '@material-ui/core'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [ocupacion, setOcupacion] = useState('')

  const handleBuscar = () => {
    if (
      !nombre
      || !edad
      || !empresa
      || !ocupacion
    ) return;
    // Ejecutar una función por unica vez cada
    // cierto tiempo usamos setTimeout

    setTimeout(() => {
      alert('Se encontró')
      console.log(nombre, edad, empresa, ocupacion)
    }, 1000)

    // Ejecutar una función cada que 
    // pase cierto tiempo usamos setInterval
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            error={!nombre}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Edad"
            fullWidth
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            error={!edad}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Empresa"
            fullWidth
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            error={!empresa}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Ocupación"
            fullWidth
            value={ocupacion}
            onChange={(e) => setOcupacion(e.target.value)}
            error={!ocupacion}
          />
        </Grid>

        <Grid item xs={12} align="center">
          <Button variant="contained" onClick={handleBuscar}>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Formulario
