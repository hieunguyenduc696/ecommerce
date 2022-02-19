import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    cardDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '80px'
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    emptyButton: {
        marginRight: '20px',
        [theme.breakpoints.down('xs')]: {
            padding: '6px 18px',
            fontSize: '14px',
            fontWeight: '400'
        }
    }, 
    container: {
        padding: '4rem 3rem'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.grey
    }
}))