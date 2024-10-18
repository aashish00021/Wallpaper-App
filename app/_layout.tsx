import {Slot} from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from 'expo-router/stack';

export default function Layout(){
    return <GestureHandlerRootView>
        <Stack 
        screenOptions={{headerShown:false}}
        />
        </GestureHandlerRootView>
}