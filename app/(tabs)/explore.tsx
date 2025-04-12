import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, SafeAreaView, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
          <SafeAreaView style={{ flex: 1, }}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
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
