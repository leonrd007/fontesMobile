import { Text, StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';

import { useFonts, 
InterTight_400Regular,
Manrope_400Regular,
Allan_400Regular,
RobotoCondensed_300Light,
Lusitana_700Bold,
NunitoSans_800ExtraBold_Italic,
Bangers_400Regular,
Oswald_400Regular,
BalsamiqSans_400Regular,
Jost_400Regular } from '@expo-google-fonts/dev';

export default function App() {
  let [fontLoaded, fontError] = useFonts({
    InterTight_400Regular,
    Manrope_400Regular,
    Allan_400Regular,
    RobotoCondensed_300Light,
    Lusitana_700Bold,
    NunitoSans_800ExtraBold_Italic,
    Bangers_400Regular,
    Oswald_400Regular,
    BalsamiqSans_400Regular,
    Jost_400Regular
  });

  if(!fontLoaded && !fontError){
    return null
  }


  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.fraseContent}>
        <Text style={styles.frase1}>"É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso."</Text>
        <Text style={styles.autor}>Bill Gates</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase2}>"Se você acha que seu pai ou seu professor são rudes, espere até ter um chefe. Ele não terá pena de você."</Text>
        <Text style={styles.autor}>Bill Gates</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase3}>"Nunca se compare com ninguém neste mundo. Caso o faça, entenda que você estará insultando a si mesmo."</Text>
        <Text style={styles.autor}>Bill Gates</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase4}>"O sucesso é um professor traiçoeiro. Ele seduz pessoas inteligentes e as faz pensar que elas não podem perder tudo."</Text>
        <Text style={styles.autor}>Bill Gates</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase5}>"Escolho uma pessoa preguiçosa para desenvolver um trabalho árduo. Por causa da preguiça, ela vai descobrir um meio simples de resolver o problema."</Text>
        <Text style={styles.autor}>Bill Gates</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase6}>"Coragem é saber o que não temer."</Text>
        <Text style={styles.autor}>Platão</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase7}>"A vida é 10% o que acontece a você e 90% como você reage a isso."</Text>
        <Text style={styles.autor}>Charles Swindoll</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase8}>"Mude o modo que você olha para as coisas, e as coisas que você olha mudarão."</Text>
        <Text style={styles.autor}>Wayne Dyer</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase9}>"Cada segundo é tempo para mudar tudo para sempre."</Text>
        <Text style={styles.autor}>Charles Chaplin</Text>
      </View>
      <View style={styles.fraseContent}>
        <Text style={styles.frase10}>"A paz vem de dentro de você mesmo. Não a procure à sua volta."</Text>
        <Text style={styles.autor}>Buda</Text>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 10
  },
  frase1: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'InterTight_400Regular'
  },
  frase2: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Manrope_400Regular'
  },
  frase3: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Allan_400Regular'
  },
  frase4: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'RobotoCondensed_300Light'
  },
  frase5: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Lusitana_700Bold'
  },
  frase6: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'NunitoSans_800ExtraBold_Italic'
  },
  frase7: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Bangers_400Regular'
  },
  frase8: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Oswald_400Regular'
  },
  frase9: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'BalsamiqSans_400Regular'
  },
  frase10: {
    margin: 3,
    fontSize: 18,
    fontFamily: 'Jost_400Regular'
  },
  autor: {
    textAlign: 'right',
    fontSize: 12,
    fontStyle: 'italic'
  },
  fraseContent: {
    width: 300,
    height: 145,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  }
})