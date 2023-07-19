import React from 'react'
import { View, Text } from 'react-native'

export default function Information({ route }) {
    return (
    <View style={{marginTop:30, marginLeft:15}}>
    <Text>Information</Text>
    <Text>Nome: {route.params?.nome}</Text>
    <Text>Tel: {route.params?.Tel}</Text>
    <Text>Endereço: {route.params?.Endereço}</Text>
    <Text>N°: {route.params?.numero}</Text>
    <Text>Profissão: {route.params?.profissao}</Text>
    <Text>e-mail: {route.params?.email}</Text>
    </View>    
  )
};  