import React, { usestate } from 'react'
import { ScrollView } from 'react-native-web'
import { Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'


const AlunosForm = () => {
  const [dados, setDados] = usestate({})

  function handleChange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  function salvar() {
    console.log(dados)
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>

        <Text>Formulário de Alunos</Text>

        <TextInput
          style={{ marginTop: 15 }}
          mode='outlined'
          label='Nome'
          onChangeText={(valor) => handleChange(valor)} />

        <TextInput
          style={{ marginTop: 10 }}
          mode='outlined'
          label='CPF'
          keyboardType='decimal-pad'
          value={dados.duracao}
          onChangeText={(valor) => handleChange(valor, 'cpf')} />

        <TextInput
          style={{ marginTop: 10 }}
          mode='outlined'
          label='Telefone'
          keyboardType='number-pad'
          value={dados.telefone}
          onChangeText={(valor) => handleChange(valor, 'telefone')} />

        <Button onPress={salvar}>salvar</Button>

      </ScrollView>
    </>
  )
}

export default AlunosForm