import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    productContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        margin: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    chipInput: {
        // padding: theme.spacing(2)
        [theme.breakpoints.up('sm')]: {
            maxWidth: '400px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
    },
    searchBtn: {
        marginLeft: '10px'
    }
}));
