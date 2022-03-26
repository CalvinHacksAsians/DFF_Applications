import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeButton: {
        padding: 15,
        position: 'relative',
        marginTop: '50%',
        width: '100%',
    },
})

export const ingridientStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#ADD8E6',
    },

    blank: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    protein: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    vege: {
        fontWeight: 'bold',
        fontSize: 14,

    },
    buttonDesign: {

        backgroundColor: "black",
    },

    bottom: {
        padding: 10,
        position: 'relative',
        marginTop: '30%',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,
    }

})

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeButton: {
        padding: 10,
        position: 'relative',
        marginTop: '20%',
        width: '100%',
    },
})