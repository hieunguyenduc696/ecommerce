import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    cardDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    emptyButton: {
        marginRight: '20px',
    }
}))