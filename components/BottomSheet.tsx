import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export const DownloadPicture = ({ onClose, wallpaper}: { 
    onClose?: () => void; 
    wallpaper:Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        onClose={onClose}
        snapPoints={['90%']}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose ={true}
        handleIndicatorStyle={{height:0}}
        handleStyle={{display:"none"}}
      >
        <BottomSheetView style={[styles.contentContainer, { flex:1 }]}>
            <ThemedView style ={{flex:1}}>
                <Image style ={styles.image} source={{uri: wallpaper.url}} />
                <View style = {styles.topBar}>
                    <Ionicons style ={{paddingLeft:5}}
                        name={'close'}
                        size={25}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    />
                    <View style ={styles.topBarInner}>
                        <Ionicons
                            name={'heart'}
                            size={25}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                            style = {{paddingRight:15}}
                        />
                        <Ionicons
                            name={'share'}
                            size={25}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        />
                    </View>
                </View>
                <ThemedView style = {styles.textContainer}>
                    <ThemedText style = {styles.text}>{wallpaper.name}</ThemedText>
                </ThemedView>
                <DownloadButton />
            </ThemedView>
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton(){
    const theme = useColorScheme() ?? 'light';
    return <Pressable style = {{
        backgroundColor:"black",
        padding:10,
        marginHorizontal:20,
        marginVertical:13,
        justifyContent:"center",
        flexDirection:"row",
        borderRadius:10,
        borderWidth:1,
        borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
        }}>
        
        <Ionicons
            name={'download'}
            size={25}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            style ={{paddingRight:4}}
        />
        <Text style ={{
            fontSize:20,
            color:'white',
            fontWeight:"600",
            
        }}>Download</Text>
    </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    // height:"60%",
    height:400,
    borderRadius:15,
  },
  topBar:{
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    paddingTop:7,
  },
  topBarInner:{
    display:'flex',
    flexDirection:"row",
    paddingRight:10
  },
  textContainer:{
    width:"100%",
    paddingTop:15
},
text:{
    fontSize:25,
    textAlign:"center",
    fontWeight:"600"
  }
});

export default DownloadPicture;