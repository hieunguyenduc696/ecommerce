import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'

import useStyles from "./styles";
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart }) => {
  const classes = useStyles()
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
      const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
            setCheckoutToken(token)
        } catch (error) {
            console.error(error)
        }
    }
    generateToken()
  }, [cart])

  const Confirmation = () => (
      <div>Confirmation</div>
  )

  
  const nextStep = () => setActiveStep(prev => prev + 1)
  const backStep = () => setActiveStep(prev => prev - 1)
  
  const next = (data) => {
      setShippingData(data)
    }

  const Form = () => activeStep === 0 ? <AddressForm next={next} checkoutToken={checkoutToken} /> : <PaymentForm shippingData={shippingData} />
  
  return (
        <>
            <div className={classes.toolbar}></div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(step => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
};

export default Checkout;
