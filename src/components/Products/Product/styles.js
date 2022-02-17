import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
        justifyContent: 'space-between'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}))