import { StyleSheet, Text, View, Image, useColorScheme, Pressable } from 'react-native'
import React from 'react'
import { Wallpaper } from '@/hooks/useWallpapers'
import { ThemedText } from './ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';

interface ImageCard {
    wallpaper: Wallpaper;
    onPress: () => void;
}

export const ImageCard: React.FC<ImageCard> = ({ wallpaper, onPress }) => {
    const theme = useColorScheme() ?? 'light';
    return (
        <Pressable onPress={onPress}>
            <View>
                <Image source={{ uri: wallpaper.url }} style={styles.Image} />
                <View style={styles.labelContainer}>
                    <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                    <View style={styles.iconContainer}>
                        <Ionicons
                            name={'heart'}
                            size={22}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    Image:{
        flex:1,
        height:220,
        borderRadius:20
    },
    label:{
        color:"white"
    },
    labelContainer:{
        position:"absolute",
        bottom:0,
        backgroundColor:"rgba(0, 0, 0, 0.5)",
        width:"100%",
        flexDirection:'row',
        justifyContent:"space-between",
        padding:5,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    iconContainer:{
        display:"flex",
        justifyContent:"center"
    }
})