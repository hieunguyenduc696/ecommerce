import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    cardDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '80px'
    },
    emptyButton: {
        marginRight: '20px',
    }, 
    container: {
        padding: '4rem 3rem'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.grey
    }
}))