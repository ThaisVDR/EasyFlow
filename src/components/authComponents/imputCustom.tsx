import React from "react";
import { Text, TextInput, View } from "react-native";
import { AuthStyles } from "./authStyles";

interface InputCustomProps {    
    label: string;
    placeholder: string;
    secure?: boolean;
}

export default function InputCustom({ label, placeholder, secure = false }: InputCustomProps) {
    return (
        <View style={AuthStyles.inputContainer}>
            <Text style={AuthStyles.inputLabel}>{label}</Text>
            <TextInput
                style={AuthStyles.inputField}
                placeholder={placeholder}
                secureTextEntry={secure}
            />
        </View>
    );
}