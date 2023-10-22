import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import { ModalPassword } from './src/components/modal';


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function App() {

  const [size, setSize] = useState(5);
  const [passwordValue, setPasswordValue] = useState('');
  const [modal, setModal] = useState(false);


  function generatePassword() {
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));

    }
    setPasswordValue(password)
    setModal(true);
    console.log('---------------------', passwordValue);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 20 }}
          minimumValue={5}
          maximumValue={20}
          minimumTrackTintColor='#000'
          maximumTrackTintColor='#ff0000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btnTxt}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modal} animationType='fade' transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModal(false)}
        >
        </ModalPassword>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700'
  },
  area: {
    marginTop: 20,
    marginBottom: 20,
    width: "80%",
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  btn: {
    fontSize: 15,
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20
  }
});
