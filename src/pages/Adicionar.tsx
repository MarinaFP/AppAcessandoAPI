import React from 'react'
import {Text, TextInput, View} from 'react-native'
import { StyleSheet} from 'react-native'
import { ImageBackground } from 'react-native'
import { Pressable } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'; 

export function Adicionar(){
    const navegar=useNavigation()
    const [email, setEmail] = useState('');
    return( 
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('../../img/Adicionar.png')}>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Nome do animal:"
                        placeholderTextColor="white"
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Raça do animal: "
                        placeholderTextColor="white"
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Sexo:"
                        placeholderTextColor="white"
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email para contato:"
                        placeholderTextColor="white"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                    
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Telefone para contato:"
                        placeholderTextColor="white"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Adicionais:"
                        placeholderTextColor="white"
                    />
                </View>

                <View style={styles.enviar}>
                    <Pressable style={styles.loginBtn} onPress={() =>alert("Animal adicionado com sucesso!")} >
                        <Ionicons style={styles.text} name="add-circle" size={24} color="black" />
                        <Text style={styles.text}>Adicionar</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    image:{
        flex: 1,
        justifyContent: "center",
    },
    inputView: {
        alignSelf: "center",
        marginBottom: 15,
        backgroundColor: "black",
        borderRadius: 30,
        width: "70%",
        height: 45,
        alignItems: "center",
      },
        text: {
            fontSize: 40,
            lineHeight: 40,
            color: 'black',
            flexDirection: "row"
        },
        
      TextInput: {
        height: 50,
        flex: 1,
        color:"white",
        padding: 10,
        marginLeft: 20,
      },
      loginBtn: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "orange",
        width: "100%",
        height: 120,
      },
      enviar:{
        marginTop: 100,
        backgroundColor: "blue",
        marginBottom: -150,
      }

})
export default Adicionar