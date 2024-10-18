import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export interface Wallpaper{
    url: string;
    name: string;
}

interface FullWallpaper extends Wallpaper{
    liked : boolean,
    suggested: boolean,
    library : boolean
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested)
}
export function useLikedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked)
}
export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library)
}

export default function useWallpapers():FullWallpaper[] {
  return [{
    url: "https://ideogram.ai/assets/image/lossless/response/wdhKxJwRS1-FIY4Y9fTbgA",
    "name":"Vintage",
    liked : true,
    suggested:true,
    library:false

  },{
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/B8dIOvXoSz6zxnSw3BvjSg",
    "name":"Posters",
    liked : true,
    suggested:false,
    library:true
  },
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/wSCK9QdDRTiP41csqyPCgA",
    "name":"Stay Cool",
    liked : false,
    suggested:true,
    library:true
  },{
    url: "https://ideogram.ai/assets/image/lossless/response/wG_YQMVuQZ-klkdj2MPntg",
    "name":"USA Poster",
    liked : true,
    suggested:false,
    library:true
  },{
    url: "https://ideogram.ai/assets/image/lossless/response/9Jo8cO2WTL2h4EY6SavZuQ",
    "name":"Motivation",
    liked : false,
    suggested:true,
    library:false
  },{
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/REXSDWYiSc2L221G_YEeHQ",
    "name":"Logo",
    liked : true,
    suggested:false,
    library:true
  }
]
}

const styles = StyleSheet.create({})