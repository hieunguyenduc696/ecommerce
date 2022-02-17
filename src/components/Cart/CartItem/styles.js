import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        objectFit: 'cover'
    },
    content: {
        height: '100px',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px'
        }
    },
    quantity: {
        margin: '0 5px'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}))