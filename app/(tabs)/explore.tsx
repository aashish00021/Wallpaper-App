import { StyleSheet, SafeAreaView, Dimensions, Text, Image, ScrollView, View } from 'react-native'
import React from 'react'
import {useState, useMemo} from 'react'
import DownloadPicture from '@/components/BottomSheet';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers';
import SplitView from '@/components/SplitView';
import Carousel from 'react-native-reanimated-carousel';

export default function explore() {
  const width = Dimensions.get('window').width;
  const allWallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  const bannerWallpapers = useMemo(() => {
    return allWallpapers.filter(wallpaper => 
      ["Vintage", "Stay Cool", "Logo"].includes(wallpaper.name)
    );
  }, [allWallpapers]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.carouselContainer}>
          <Carousel
            width={width}
            height={width * 0.75}
            autoPlay={true}
            data={bannerWallpapers}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ item }) => (
              <View style={styles.carouselItemContainer}>
                <Image
                  source={{ uri: item.url }}
                  style={styles.carouselImage}
                />
              </View>
            )}
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>Today's Hot Picks</Text>
          </View>
        </View>
        <SplitView
          wallpapers={allWallpapers}
          onSelectWallpaper={setSelectedWallpaper}
        />
      </ScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  carouselContainer: {
    height: Dimensions.get('window').width * 0.75,
    position: 'relative',
  },
  carouselItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  carouselImageName: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});