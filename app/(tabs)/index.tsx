import { Image, StyleSheet,View, Platform, TextInput, ScrollView, Text, SafeAreaView, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
      <SafeAreaView style={{ flex: 1, }}>
     <TextInput value={''} onChange={e=>{}} style={{ borderWidth:1, padding:5, margin:15}} />
 <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
               {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((_, i) => {
                 return <View style={{
                  padding:10,
                  borderWidth:2
                 }}>
                  <Text>{_}</Text>
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
