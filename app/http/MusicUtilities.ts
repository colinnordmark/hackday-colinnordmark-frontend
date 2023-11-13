import { Song } from "../types/Song";


export function siteFromUrl(url: string){
    if(url.includes("soundcloud")){
      return "Soundcloud"
    }
    if(url.includes("youtube")){
        return "Youtube"
    }
    if(url.includes("spotify")){
        return "Spotify"
    }
    return "Unknown source"
  }