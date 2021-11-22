import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import fonts from '../styles/fonts';

export const CustomEdt = (props) => {

    const { txtLabel = "DIGITE", txtPlaceHolder = "DIGITE AQUI" } = props;

    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>

            <Text style={styles.label}>
                {txtLabel}
            </Text>

            <TextInput style={styles.edit}
                placeholder={txtPlaceHolder} />

        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.normal,
        fontSize: 14,
        color: 'silver',
        textTransform: 'uppercase',
        padding: 1
    },

    edit: {
        placeholderTextColor: 'silver',
        fontFamily: fonts.normal,
        fontSize: 14,
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 8,
        height: 28,
        padding: 2
    }
});