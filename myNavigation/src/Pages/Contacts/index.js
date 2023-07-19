import React from 'react'
import { View, Text } from 'react-native'

export default function Contacts({navigation}) {
    return (
    <View style={{marginTop:15, marginLeft:10}}>
      <Text>Gabriel Correia:</Text>
    <Text>Telefone: (71) 99857-1529</Text>
    <Text onPress={() => navigation.navigate('Information',  {
        nome:'Gabriel Correia', 
        Tel: '(71) 99857-1529',
        Endereço: 'Paraíso da Glória', 
        numero: '77',
        profissao: 'Developer',
        email: 'gabriel_Correia@hotmail.com'
      } )
  }
  >Information...</Text>
    <View style={{marginTop:15}}>
    <Text>Tito Bruno:</Text>
    <Text>Telefone: (71) 9933-8871</Text>
    <Text onPress={() => navigation.navigate('Information',  {
        nome:'Tito Bruno', 
        Tel: '(71) 9933-8871',
        Endereço: 'Pernambués', 
        numero: '24',
        profissao: 'Desenvolvedor de Softwares',
        email: 'bruno_Tito@hotmail.com'
      } )
     }
       >Information...</Text>
    </View>
      </View>
  )
};