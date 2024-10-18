import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react';
import {useState} from 'react';
import { ThemedView } from '@/components/ThemedView';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers';
import { ImageCard }  from '@/components/imageCard';
import DownloadPicture from './BottomSheet';



export default function SplitView({ wallpapers, onSelectWallpaper }: {
    wallpapers: Wallpaper[];
    onSelectWallpaper: (wallpaper: Wallpaper) => void;
}) {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
                <FlatList 
                    data={wallpapers.filter((_, index) => index % 2 === 0)}
                    renderItem={({item}) => (
                        <View style={styles.imageContainer}>
                            <ImageCard onPress={() => onSelectWallpaper(item)} wallpaper={item} />
                        </View>
                    )}
                    keyExtractor={item => item.name}
                    contentContainerStyle={styles.flatListContent}
                />
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
                <FlatList 
                    data={wallpapers.filter((_, index) => index % 2 === 1)}
                    renderItem={({item}) => (
                        <View style={styles.imageContainer}>
                            <ImageCard onPress={() => onSelectWallpaper(item)} wallpaper={item} />
                        </View>
                    )}
                    keyExtractor={item => item.name}
                    contentContainerStyle={styles.flatListContent}
                />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    innerContainer: {
        flex: 1,
    },
    imageContainer: {
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
    flatListContent: {
        paddingTop: 4,
    },
});