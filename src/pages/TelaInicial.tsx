import React from "react";
import { ImageBackground, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text} from "react-native";


export function Telainicial(){
    const navegar = useNavigation()
    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('../../img/telainicial.png')}>
                <Pressable style={styles.button} onPress={() => navegar.navigate('Login')} >
                    <Text style={styles.text}>COMEÇAR</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    button: {
        marginTop:100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
        borderRadius: 0,
        elevation: 0,
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 35,
        lineHeight: 35,
        color: 'black',
    },
    image:{
        flex: 1,
        justifyContent: "center",
    },

})
export default Telainicial;