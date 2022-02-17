import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        width: '100%',
        objectFit: 'cover',
        height: '0',
        paddingTop: '56.25%'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxHeight: '50px'
    },
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px'
        }
    }, 
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}))