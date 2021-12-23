import React from "react";
import { Image, View, ImageBackground } from "react-native";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export function Menu(){
    const navegar = useNavigation()
    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('../../img/Menu.png')}>
                <View style={styles.pressable}>
                        <Pressable style={styles.apertar} onPress={() => navegar.navigate('Procurar')}>
                            <Feather style={styles.tamanho} name="search" size={24} color="black" />
                            <Text style={styles.tamanho}>Procurar</Text>
                        </Pressable>

                    <Pressable style={styles.apertar} onPress={() => navegar.navigate('Adicionar')}>
                        <Ionicons style={styles.tamanho} name="add-circle" size={24} color="black" />
                        <Text style={styles.tamanho} >Adicionar</Text>
                    </Pressable>

                    <Text  style={styles.text}>Varginha - MG</Text>
                </View>

                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        marginTop: 200,
        fontSize: 30,
        lineHeight: 30,
        color: 'black',
        fontStyle: "italic"
    },
      
    image:{

        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    pressable:{
        width: "90%",
        height: "85%"
    },
    apertar:{
        flexDirection: "row",
        marginTop: 14,
    },
    tamanho:{
        fontSize:24,
    },
})