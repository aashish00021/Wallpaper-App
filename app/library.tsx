import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import SplitView from '@/components/SplitView';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers'

export default function library() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);
  return (
    <View>
      <SplitView
        wallpapers={wallpapers}
        onSelectWallpaper={(wallpaper: Wallpaper) => setSelectedWallpaper(wallpaper)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})