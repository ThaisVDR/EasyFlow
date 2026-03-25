import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import { AuthStyles } from './authStyles';
import ButtonProp from '../button';

interface SuccessProps {
  title: string;
  message: string;
  buttonText: string;
  onAction: () => void;
}

export default function SuccessCard({ title, message, buttonText, onAction }: SuccessProps) {
  return (
    <View style={AuthStyles.sucessContent}>
      <View style={AuthStyles.sucessIconContainer}>
        <FontAwesome6 name="circle-check" size={60} color="#16a34a" />
      </View>
      
      <Text style={AuthStyles.title}>{title}</Text>
      <Text style={AuthStyles.subtitle}>{message}</Text>
      
      <View style={AuthStyles.inputGap}>
        <ButtonProp txt={buttonText} onPress={onAction} />
      </View>
    </View>
  );
}