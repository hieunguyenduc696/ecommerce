import React, { useState, useEffect } from 'react'
import { InputLabel, Select, Button, MenuItem, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormInput from './CustomTextField'

import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm()
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubDivision, setShippingSubDivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}))
  const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))

  useEffect(() => {
      const fetchShippingCountries = async (checkoutTokenId) => {
          const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
          setShippingCountries(countries)
          setShippingCountry(Object.keys(countries)[0])
      }
      fetchShippingCountries(checkoutToken)
  }, [])

  useEffect(() => {
    const fetchShippingSubdivisions = async () => {
        if (shippingCountry) {
            const { subdivisions } = await commerce.services.localeListSubdivisions(shippingCountry)
            setShippingSubdivisions(subdivisions)
            setShippingSubDivision(Object.keys(subdivisions)[0])
        }
    }
    fetchShippingSubdivisions()
}, [shippingCountry])

    useEffect(() => {
        const fetchShippingOptions = async () => {
            if (shippingCountry && shippingSubDivision) {
                const options = await commerce.checkout.getShippingOptions(checkoutToken.id, { country: shippingCountry, region: shippingSubDivision})
                setShippingOptions(options)
                setShippingOption(options[0].id)
            }
        }
        fetchShippingOptions()
    }, [shippingCountry, shippingSubDivision])

  return (
      <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubDivision, shippingOption }))}>
                <Grid container spacing={3}>
                    <FormInput name="firstName" label="First Name" required />
                    <FormInput name="lastName" label="Last Name" required />
                    <FormInput name="address1" label="Address" required />
                    <FormInput name="email" label="Email" required />
                    <FormInput name="city" label="City" required />
                    <FormInput name="zip" label="ZIP / Postal Code" required />
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={shippingSubDivision} fullWidth onChange={(e) => setShippingSubDivision(e.target.value)}>
                            {subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                            {options.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" component={Link} to='/cart'>Back to Cart</Button>
                    <Button variant="contained" type="submit" color="primary">Next</Button>
                </div>
            </form>
        </FormProvider>
      </>
  )
}

export default AddressForm