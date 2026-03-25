import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AuthStyles } from './authStyles';

interface AuthLinkProps {
  text: string;
  onPress: () => void;
}

export default function AuthLink({ text, onPress }: AuthLinkProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={AuthStyles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
}