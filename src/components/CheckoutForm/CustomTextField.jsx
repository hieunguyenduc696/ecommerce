import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext()  
  return (
      <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            defaultValue=""
            render={() =>( 
            <TextField fullWidth name={name} required={required} label={label}></TextField>)}
          />
      </Grid>
  )
}

export default FormInput