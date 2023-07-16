import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import firebase from "./src/firebaseConnection";

export default function App(){

  const [nome, setNome] = useState('Carregando ...')

  useEffect(() => {
      async function dados(){
        await firebase.database().ref('nome').on('value', (snapshot)=>{
          setNome(snapshot.val())
        })
      }
  dados();

  }, []);
  
  return(
    <View style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>
        Deus é muito bom o tempo todo!!! !! {nome}
      </Text>
    </View>
  )
}