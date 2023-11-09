import { Song } from "../types/Song";


export function siteFromUrl(url: string){
    if(url.includes("soundcloud")){
      return "Soundcloud"
    }
    return "Unknown source"
  }