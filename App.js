import { StatusBar } from 'expo-status-bar';
import {
  Alert, Text, TextInput, TouchableOpacity,
  View, Keyboard, Image
} from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

export default function App() {

  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();

  function somar() {
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  function subtrair() {
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }
  function multiplicar() {
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }
  function dividir() {

    if (valor1 && valor2 == 0) {
      setResultado('ERRO');
    }
    else
      setResultado(parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora</Text>
      <StatusBar style="auto" />
      <Text style={styles.resultText}>{resultado}</Text>
      <View style={styles.spaceVoid}>
        <Text style={styles.smallTextDark}>Valor 1</Text>
        <TextInput style={styles.textBox} onChangeText={(texto) => setValor1(texto)} keyboardType='numeric'></TextInput>
        <Text style={styles.smallTextDark}>Valor 2</Text>
        <TextInput style={styles.textBox} onChangeText={(texto) => setValor2(texto)} keyboardType='numeric'></TextInput>
      </View>
      <View style={[styles.row, styles.spaceVoid]}>
        <TouchableOpacity style={styles.btnBlue} onPress={() => somar()}><Text style={styles.btnText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnBlue} onPress={() => subtrair()}><Text style={styles.btnText}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnBlue} onPress={() => multiplicar()}><Text style={styles.btnText}>x</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnBlue} onPress={() => dividir()}><Text style={styles.btnText}>÷</Text></TouchableOpacity>
      </View>
    </View>
  );
}