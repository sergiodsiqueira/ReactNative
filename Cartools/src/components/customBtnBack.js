import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const CustomBtnBack = (props) => {

    const { onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={{ marginLeft: 5 }}>
            <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
    );
}