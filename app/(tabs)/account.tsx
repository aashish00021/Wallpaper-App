import { Pressable, StyleSheet, Text, useColorScheme, View, Appearance } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useThemeColor } from '@/hooks/useThemeColor';

export default function account() {
  return (
    // <SafeAreaView style ={{flex:1}}>
    <ThemedView style ={{flex:1}}>
      <Header />
      <ThemedView style ={{flex:1}}>
        <LoginButtons />
        <ThemeSelector/>
      </ThemedView>
    </ThemedView>
    // </SafeAreaView>
  )
}

function ThemeSelector(){
  return<ThemedView style = {styles.margin}>
    <ThemedText style={styles.textBig}>Settings</ThemedText>
    <ThemedText style = {{fontSize:20, paddingTop:8}}>Theme</ThemedText>
    <ThemedView style ={styles.themeSelectContainer}>
      <ThemedButton title={'Dark'} selected={false} colourScheme="dark"/>
      <ThemedButton title={'Light'} selected={false} colourScheme="light"/>
      <ThemedButton title={'System'} selected={false} colourScheme={null}/>
    </ThemedView>
  </ThemedView>
}

function ThemedButton({title, selected, colourScheme}: {selected:boolean, title:string, colourScheme:"dark"|"light"|null}){
  const theme = useColorScheme();
  return <Pressable style ={{padding:10,
  borderWidth:1,
  borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
  borderRadius:5,
  flex:0.3,
  alignContent:"center"
  }} onPress={() => {
    Appearance.setColorScheme(colourScheme)
  }}>
    <ThemedText style = {{textAlign:'center',width:"100%"}}>{title}</ThemedText>
  </Pressable>
}

function LoginButtons(){
  const theme = useColorScheme() ?? 'light';
  return <>
         <AuthButton 
          label="Sign in"
          icon = {<Ionicons 
            name ="logo-google"
            size={24}
            color = {theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            style = {{paddingRight:10}}
        />}/>
        <AuthButton 
          label={"Sign in"}  
          icon = {<Ionicons 
            name ={"logo-apple"}
            size={24}
            color = {theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            style = {{paddingRight:10}}
        />}/>
  </>
}

function AuthButton({label, icon}:{
  label: string,
  icon: any
}){
  const theme = useColorScheme() ?? 'light';
  return <Pressable style = {{
      backgroundColor:theme,
      padding:10,
      marginHorizontal:40,
      marginVertical:5,
      justifyContent:"center",
      flexDirection:"row",
      borderRadius:10,
      borderWidth:1,
      borderColor:theme === 'light' ? Colors.light.icon : Colors.dark.icon
      }}>
      
      {icon}
      <ThemedText style ={{
          fontSize:20,
          fontWeight:"600",
      }}>{label}</ThemedText>
  </Pressable>
}

function Header(){
  return <ThemedView style ={styles.topBar}>
    <ThemedText style={styles.textBig}>For Designers</ThemedText>
    <ThemedText>Sign in to save your data</ThemedText>
  </ThemedView>
}


const styles = StyleSheet.create({
  textBig:{
    fontSize:25,
    fontWeight:"600"
  },
  topBar:{
    padding:30
  },
  themeSelectContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  },
  themeSelectChild:{
    flex:0.33
  },
  margin:{
    marginTop:20,
    padding:30
  }
})