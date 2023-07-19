import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import firebase from "./src/firebaseConnection";

export default function App(){

  const [nome, setNome] = useState('Carregando ...')
  const [cargo, setCargo] = useState('Carregando ...')

  useEffect(() => {
    //olheiro fica o tempo todo olhando a data base
     async function dados(){
      //Criar um (nó)
       // await firebase.database().ref('tipo').set('Cliente');

        //remover um nó
        //await firebase.database().ref('tipo').remove();

        //criando um novo e passando um cargo pra ele
      //  await firebase.database().ref('usuarios').child(3).set({
         // nome:'Karoline idiukov',
          //cargo:'Programadora'
        //});
      //catualizando um usuario existente
      //await firebase.database().ref('usuarios').child(3).update({
       // nome:'Karolao '
     // })

      }


  dados();

  }, []);
  

  async function cadastrar() {
    if (nome !== '' && cargo !== '') {
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;
  
      if (chave) {
        usuarios.child(chave).set({
          nome: nome,
          cargo: cargo
        });
  
        alert('Cadastrado com sucesso!');
        setCargo('');
        setNome('');
      } else {
        // Tratar caso a chave seja nula
        console.error('Erro ao obter a chave do nó "usuarios"');
      }
    }
  }
  
  

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
       <TextInput 
       style={styles.input}
       underlineColorAndroid="transparent"
       onChangeText={(texto)=> setNome(texto)}
       value={nome}
       />
        <Text style={styles.texto}>Cargo</Text>
       <TextInput 
       style={styles.input}
       underlineColorAndroid="transparent"
       onChangeText={(texto)=> setCargo(texto)}
       value={cargo}
       />
       
        <Button title="Novo Funcionario"
        onPress={cadastrar}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10,
  },
  texto:{
    fontSize:20,
  },
  input:{
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor: '#121212',
    height:40,
    fontSize:17,
  }
})