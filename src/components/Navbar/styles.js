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
    },
    imageWrapper: {
        width: '40px',
        height: '40px',
        backgroundColor: 'transparent'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    iconButton: {

    },
}));
