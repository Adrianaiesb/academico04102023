import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Professores = ({navigation}) => {
  const [professores, setProfessores] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('professores').then(resultado => {

      resultado = JSON.parse(resultado) || []

      console.log(resultado)
      setProfessores(resultado)
    })
  }, [])
  return (
    <>
        <Text>Professores</Text>

        {professores.map(item => (
        <Text>{item.nome}</Text>
      ))}
        <Button 
            icon='plus' 
            mode='contained' 
            onPress={()=>navigation.push('Professores-form')}>
        
            Novo
        </Button>
    </>
  )
}

export default Professores