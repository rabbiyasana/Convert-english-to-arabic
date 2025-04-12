import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, SafeAreaView, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { usePathname } from 'expo-router';

export default function TabTwoScreen() {

  const { getLocalStorage } = useLocalStorage()
  const [duaList, setDuaList] = useState<any>(null)

  useEffect(()=>{
    getDuaList()
  },[usePathname()])

  const getDuaList = async () => {
    const data = await getLocalStorage('dua')
    if(data){
      setDuaList(data)
    }
  }

  return (
          <SafeAreaView style={{ flex: 1, }}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      {duaList?.map((_:any, i:number) => {
                       return <View key={i} style={{
                        padding:10,
                         flexDirection:'row',
                        borderWidth:1,
                        borderColor:'grey',
                       }}>
                        <View style={{flex:1, borderWidth:1, borderColor:'grey', padding:10, backgroundColor:'white'}}>
                          <Text>{_.text}</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                        <Ionicons
                          name='play'
                          size={18}
                          color={Colors.light.icon}
                        />
                        <Ionicons
                          name='trash'
                          size={18}
                          color={Colors.light.icon}
                        />
                        <Ionicons
                          name='copy'
                          size={18}
                          color={Colors.light.icon}
                        />
                        </View>
                       </View>
                     })}
    </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
