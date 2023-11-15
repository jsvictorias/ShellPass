import React, { useState, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { collection, doc, getFirestore, getDocs } from "firebase/firestore";
import app from '../../../services/firebaseConfig';
import PlanoA from "../Planos/PlanoA";
import PlanoB from "../Planos/PlanoB";
import PlanoC from "../Planos/PlanoC";
import PlanoD from "../Planos/PlanoD";
import PlanoE from "../Planos/PlanoE";
import PlanoF from "../Planos/PlanoF";
import PlanoG from "../Planos/PlanoG";
import PlanoH from "../Planos/PlanoH";
import PlanoI from "../Planos/PlanoI";
import PlanoJ from "../Planos/PlanoJ";

export default function Question16() {
  

  const db = getFirestore(app);
  const [respostas, setRespostas] = useState({}); // Estado para armazenar as respostas

  // Função para buscar respostas no Firestore
  const fetchRespostas = async () => {
    const perguntasCollection = collection(db, 'perguntas');
    const querySnapshot = await getDocs(perguntasCollection);
    let respostasData = {};

    querySnapshot.forEach((doc) => {
      respostasData[doc.id] = doc.data();
    });

    setRespostas(respostasData);
  };

  // Use useEffect para buscar as respostas quando o componente for montado
  useEffect(() => {
    fetchRespostas();
  }, []);

  const matriz2 = [1, 8, 9, 10, 11, 13];
  const matriz4 = [2, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16];
  const matrizTodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const RespPlanos = () => {
    if (
      matrizTodos.every((questionNumber) => 
        respostas[`Question${questionNumber}`]?.resposta1 
      )
    ) {
      return <PlanoA />;
    } 
    else if (
      matriz2.every((questionNumber) =>
        respostas[`Question${questionNumber}`]?.resposta1
      ) ||
      matriz4.every((questionNumber) => 
        respostas[`Question${questionNumber}`]?.resposta2
      )
    ) {
      return <PlanoB />;
    }
    else if (
      matrizTodos.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta2
      )
    ){
      return <PlanoC />
    }
    else if (
      matriz2.every((questionNumber) =>
        respostas[`Question${questionNumber}`]?.resposta2
      ) ||
      matriz4.every((questionNumber) => 
        respostas[`Question${questionNumber}`]?.resposta4
      )
    ) {
      return <PlanoD />;
    }
    else if (
      matriz2.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta1
      ) ||
      matriz4.every((questionNumber) => 
      respostas[`Questions${questionNumber}`]?.resposta4
      )
    ) {
      return <PlanoJ />
    }
    else if (
      matriz2.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta2
      ) ||
      matriz4.every((questionNumber) => 
      respostas[`Questions${questionNumber}`]?.resposta3
      )
    ) {
      return <PlanoE />
    }
    else if (
      matriz2.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta2
      ) ||
      matriz4.every((questionNumber) => 
      respostas[`Questions${questionNumber}`]?.resposta4
      )
    ) {
      return <PlanoF />
    }
    else if (
      matriz2.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta1
      ) ||
      matriz4.every((questionNumber) => 
      respostas[`Questions${questionNumber}`]?.resposta3
      )
    ) {
      return <PlanoG />
    }
    else if (
      matriz2.every((questionNumber) => 
      respostas[`Question${questionNumber}`]?.resposta1
      ) ||
      matriz4.every((questionNumber) => 
      respostas[`Questions${questionNumber}`]?.resposta4
      )
    ) {
      return <PlanoH />
    }
    else {
      return <PlanoI />
    }
    
    
  };


  /* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] -> cria uma matriz com todas as perguntas
  o .every((questionNumber)) é um método (.every()) e verifica se todos os elementos da matriz satisfazem a condição
  no caso a condição é a função questionNumber.
  Para cada 'questionNumber' acessa os dados de respostas do objeto 'respostas' para cada pergunta, se resposta1 ou resposta2
  for verdadeira e se for verdadeira retorna os planos. */

  

  return (
    RespPlanos()
   
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
