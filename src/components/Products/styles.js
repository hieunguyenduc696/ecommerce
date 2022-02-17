import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    productContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
