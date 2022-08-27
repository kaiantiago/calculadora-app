import { StyleSheet } from 'react-native';
import { myColors } from './myColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
    },
    header: {
        fontSize: 25,
        color: '#FFF',
        backgroundColor: 'blue',
        width: '100%',
        textAlign: 'center',
    },
    textBox: {
        borderColor: "#000",
        borderWidth: 2,
        height: 50,
        width: '50%',
        paddingHorizontal: 50,
        borderRadius: 10,
    },
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallTextDark: {
        fontSize: 20,
        color: myColors.black,
        marginRight: 30,
        marginLeft: 10,
    },
    resultText: {
        fontSize: 60,
    },
    btnText: {
        fontSize: 40,
        color: myColors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceVoid: {
        marginTop: 20,
    }
})

