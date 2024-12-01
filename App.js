import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  // Estados separados para cada botão
  const [scaleRegister, setScaleRegister] = useState(1); // Para o botão "Cadastrar"
  const [scaleLogin, setScaleLogin] = useState(1); // Para o botão "Entrar"

  // Funções para lidar com o pressionamento
  const onPressInRegister = () => setScaleRegister(0.95); // Reduz o tamanho ao pressionar "Cadastrar"
  const onPressOutRegister = () => setScaleRegister(1); // Restaura o tamanho ao soltar "Cadastrar"

  const onPressInLogin = () => setScaleLogin(0.95); // Reduz o tamanho ao pressionar "Entrar"
  const onPressOutLogin = () => setScaleLogin(1); // Restaura o tamanho ao soltar "Entrar"

  return (
    <ImageBackground 
      source={require('./img/imagem_Home.png')} // Caminho da imagem
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {/* Botão Cadastrar */}
          <TouchableOpacity 
            style={[styles.button, styles.registerButton, { transform: [{ scale: scaleRegister }] }]} 
            onPressIn={onPressInRegister} // reduz o tamanho quando pressionado
            onPressOut={onPressOutRegister} // restaura o tamanho quando soltar
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <TouchableOpacity 
            style={[styles.button, styles.loginButton, { transform: [{ scale: scaleLogin }] }]} 
            onPressIn={onPressInLogin} // Reduz o tamanho quando pressionado
            onPressOut={onPressOutLogin} // Restaura o tamanho quando soltar
            activeOpacity={1} // Remove a opacidade ao clicar
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Faz a imagem de fundo cobrir toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 67,
  },
  buttonContainer: {
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'center', // Centraliza os botões horizontalmente
    width: '100%',
  },
  button: {
    width: '47%',
    height: 65,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10, // Espaço entre os botões
  },
  registerButton: {
    backgroundColor: '#FFA500',
  },
  loginButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
