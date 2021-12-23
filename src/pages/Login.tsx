import React from 'react'
import {Text, TextInput, View} from 'react-native'
import { StyleSheet} from 'react-native'
import { ImageBackground } from 'react-native'
import { Pressable } from 'react-native'
import { } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import {   KeyboardAvoidingView,  Alert,} from "react-native";
import { Button } from "../components";
import { useAuth } from "../hook/auth";
import { IAuthenticate, IUser } from "../interfaces/User.interface";
import { ButtonText } from '../components'


export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
  
    function handleChange(item: IAuthenticate) {
      setData({ ...data, ...item });
    }
    async function handleSignIn() {
      try {
        if (data?.email && data.password) {
          await signIn(data);
        } else {
          Alert.alert("Preencha todos os campos!!!");
        }
      } catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
          for (const [key, value] of Object.entries(data.data)) {
            message = `${message} ${value}`;
          }
        }
        Alert.alert(`${data.message} ${message}`);
      }
    }
    
    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('../../img/login.png')}>
                <KeyboardAvoidingView style={styles.Keyboard}>
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.formRow}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ email: i })}
                    ></TextInput>
                    </View>
                    <View style={styles.formRow}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="senha"
                        secureTextEntry={true}
                        onChangeText={(i) => handleChange({ password: i })}
                    ></TextInput>
                    </View>
                    <Button title="Login" onPress={handleSignIn} />
                    <ButtonText title="Cadastre-se"  onPress={() => navigation.navigate('Cadastrar')} />
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
    },
    image:{

        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }, title: {
        fontSize: 36,
        color: 'black',
        fontWeight: "500",
        marginBottom: 20,
        textAlign: "center",
      },
      formRow: {
        margin: 10,
        flexDirection: "row",
      },
      label: {
        fontSize: 18,
        color: 'black',
        padding: 5,
      },
      input: {
        borderBottomWidth: 1,
        fontSize: 18,
        padding: 5,
        width: "50%",
        marginLeft: 5,
        marginBottom: 5,
    }, Keyboard:{
        backgroundColor:'white',
        marginTop:400,
    },

})
export default Login;