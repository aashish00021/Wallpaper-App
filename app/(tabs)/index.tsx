import SplitView from '@/components/SplitView';
import useWallpapers, { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Text, View, StyleSheet, useColorScheme} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import DownloadPicture from '@/components/BottomSheet';
import { Wallpaper } from '@/hooks/useWallpapers';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  const theme = useColorScheme() ?? 'light';
  return (
    // <SafeAreaView style={{flex:1}}>
    <Tab.Navigator style = {{flex:1}}
    screenOptions={{
      tabBarActiveTintColor: Colors[theme].tint,
      tabBarStyle:{
        backgroundColor:Colors[theme].background
      },
    }}>

      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
    // </SafeAreaView>
  );
}

function LibraryScreen(){
  const wallpapers = useLibraryWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  return(
    <View style = {styles.container}>
      <SplitView 
        wallpapers={wallpapers} 
        onSelectWallpaper={(wallpaper) => setSelectedWallpaper(wallpaper)}
      />
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </View>
  )
}
function LikedScreen(){
  const wallpapers = useLikedWallpapers();
  return(
    <View style = {styles.container}>
      <SplitView 
        wallpapers={wallpapers} 
        onSelectWallpaper={(wallpaper) => {
          // Handle wallpaper selection here
        }}
      />
    </View>
  )
}
function SuggestedScreen(){
  const wallpapers = useSuggestedWallpapers();
  return(
    <View style = {styles.container}>
      <SplitView 
        wallpapers={wallpapers} 
        onSelectWallpaper={(wallpaper) => {
          // Handle wallpaper selection here
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})