import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';


export function ModalPassword({password, handleClose}) {

async function handleCopyPassword(){
   await Clipboard.setStringAsync(password);
   alert('Senha salva com sucesso!!!');
   handleClose();
}

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title} >Senha Gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text  style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={handleClose}>
                        <Text style={styles.btnTxt}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{...styles.btn, ...styles.btnSave}}>
                        <Text style={styles.btnSaveTxt}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#fff',
        paddingBottom: 24,
        paddingTop: 24,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    btnArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 14,
        padding:8
    },
    btnSaveTxt: {
        color: '#fff',
        fontWeight:'bold'
    },
    btnSave: {
        backgroundColor: '#392DE9',
        borderRadius: 8
    }
});