import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native"
import fonts from '../styles/fonts';

export const CustomBtn = (props) => {
    
    const {textButton = "BOTAO", textStyle = {}, onPress} = props;
    
    return(
        <TouchableOpacity onPress={onPress} 
                          style={styles.btnEstilo}>
            
            <Text style={[styles.text, textStyle]}>
                {textButton}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.normal,
        fontSize: 10,
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    },

    btnEstilo: {
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 10,
        margin: 15,
    }
});