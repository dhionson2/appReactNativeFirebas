import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import firebase from "./src/firebaseConnection";

export default function App(){

  const [nome, setNome] = useState('Carregando ...')
  const [idade, setIdade] = useState('Carregando ...')

  useEffect(() => {
    //olheiro fica o tempo todo olhando a data base
     async function dados(){
       await firebase.database().ref('usuarios/1').on('value', (snapshot)=>{
          setNome(snapshot.val().nome)
          setIdade(snapshot.val().idade)
        })
      }


  dados();

  }, []);
  
  return(
    <View style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>
        Deus é muito bom o tempo todo!!! !! {nome}
       
      </Text>
      <Text> idade = {idade}</Text>
    </View>
  )
}