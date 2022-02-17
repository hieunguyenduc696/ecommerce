import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none'
    },
    imageWrapper: {
        width: '40px',
        height: '40px',
        backgroundColor: 'transparent',
        marginRight: '10px'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    iconButton: {

    },
    badge: {
        color: 'unset'
    }
}));
