import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete'

const Ejemplo1 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        <div className="gridItem">
          <Icon>delete</Icon>
          Contenido
          <DeleteIcon/>
        </div>
      </Grid>
      <Grid item lg={3} md={2} sm={6} xs={12}>
        <div className="gridItem">Contenido</div>
      </Grid>
      <Grid item lg={3} md={2} sm={6} xs={12}>
        <div className="gridItem">Contenido</div>
      </Grid>
      <Grid item lg={3} md={2} sm={6} xs={12}>
        <div className="gridItem">
        Contenido
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="gridItemInterno">
                Grid interna
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default Ejemplo1
