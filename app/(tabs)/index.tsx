import { Image, StyleSheet,View, Platform, TextInput, ScrollView, Text, SafeAreaView, StatusBar, Button, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoogleGenerativeAI } from '@google/generative-ai';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {

  const [text, setText] = useState('')
  const [dua, setDua] = useState<any>([])
  const { saveToStorage } = useLocalStorage()

  const convertText = async (text: string, language: string) => {
    try {
   
      const genAI = new GoogleGenerativeAI('');
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `convert this text ${text} to ${language} language in context of dua and prayers and add Ḍammah Kasrah Fatḥah to translated text and return single option and only arabic no other text in response`;
      const response = await model.generateContent(prompt);
              console.log("response",response.response.text());
      setDua([...dua,{id :Math.floor(Math.random() * 10), text: response.response.text()}])
     await saveToStorage('dua', [...dua,{id :Math.floor(Math.random() * 10), text: response.response.text()}])
     setText('')
    } catch (error) {
      console.log("Error in convertText", error);
    }
    }
    
    const speakText = (text:any) => {
      try {
      console.log("speakText", text);
      Speech.stop(); // optional: stop any ongoing speech
      Speech.speak(text, {
        language: 'ar-SA', // or 'ar-SA' for Arabic
        pitch: 1.0,
        rate: 1.0,
      });
      // Speech.speak('Hi I am zain ahmed');
    } catch (error) {
      console.warn("Speech error:", error);
    }
    };

  return (
      <SafeAreaView style={{ flex: 1, }}>
      <View style={{ flexDirection:'column',  padding:15, gap:10 }}>
      <TextInput numberOfLines={2} value={text} onChangeText={setText} style={{ 
        borderWidth:1,borderColor:`${Colors.light.border}`, padding:10}} />
      <View style={{
         borderRadius:20,
         borderColor:'grey',
         width:35,
         borderWidth:1,
         alignSelf:'flex-end',
      }} >
        <Pressable onPress={()=>convertText(text, 'arabic')}>
        <MaterialCommunityIcons
        style={{padding:5,}}
            name='google-translate'
            size={24}
            color={Colors.light.icon}
          />
        </Pressable>
        </View>
      </View>
 <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
               {dua.map((_:any, i:number) => {
                 return <View style={{
                  padding:10,
                  flexDirection:'row',
                  borderWidth:2
                 }}>
                  <Text style={{flex:1}}>{_.text}</Text>
                  <Ionicons
                  onPress={()=>speakText(_.text)}
                          name='play'
                          size={18}
                          color={Colors.light.icon}
                        />
                 </View>
               })}
    </ParallaxScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
