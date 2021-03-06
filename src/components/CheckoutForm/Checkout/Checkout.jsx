import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from "./styles";
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error, refreshCart }) => {
  const classes = useStyles()
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [activeStep, setActiveStep] = useState(0)
  const [isFinish, setIsFinish] = useState(false)
//   console.log(checkoutToken)

  useEffect(() => {
      const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
            setCheckoutToken(token)
        } catch (error) {
            console.log(error)
        }
    }
    generateToken()
  }, [cart])

  const timeout = () => {
      setTimeout(() => {
          setIsFinish(true)
      }, 3000)
  }

  let Confirmation = () => order.customer ? (
      <>
        <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
        </div>
        <br />
        <Button component={Link} to='/' variant="outlined" type='button'>Back to Home</Button>
      </>
    ) : isFinish ? (
            <>
                <div>
                    <Typography variant="h5">Thank you for your purchase</Typography>
                    <Divider className={classes.divider} />
                </div>
                <br />
                <Button component={Link} to='/' variant="outlined" type='button'>Back to Home</Button>
            </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
  )

  if (error) {
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} to='/' variant="outlined" type='button'>Back to Home</Button>
      </>
  }
  
  const nextStep = () => setActiveStep(prev => prev + 1)
  const backStep = () => setActiveStep(prev => prev - 1)
  
  const next = (data) => {
      setShippingData(data)
      nextStep()
  }

  const Form = () => activeStep === 0 ? <AddressForm next={next} checkoutToken={checkoutToken} /> : <PaymentForm onCaptureCheckout={onCaptureCheckout} backStep={backStep} nextStep={nextStep} checkoutToken={checkoutToken} shippingData={shippingData} timeout={timeout} refreshCart={refreshCart} />
  
  return (
        <>
            <CssBaseline />
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
