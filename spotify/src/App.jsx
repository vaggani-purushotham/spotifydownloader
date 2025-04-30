import React from "react";
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios"
import { useState } from "react";

function App() {
  const [URL, setURL]= useState("")

  const handleURL=(e)=>{
    e.preventDefault()
    setURL(e.target.value)
  }
  console.log(URL)
  const downloadSong=async()=>{
    setURL("")
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: `${URL}`
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };
    try {
      const rspn=await axios.request(options)
      //console.log(rspn.data.data.downloadlink)
      window.location.href=rspn.data.data.downloadlink;
    } catch (error) {
      console.log(error)
    }

  }


  return(
  <div
    className="h-screen w-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500 via-slate-400 to-zinc-400 flex items-center justify-center flex-col gap-y-5"
    >
    <div
      className="flex items-center justify-center gap-x-2 text-xl font-bold"
    >
    <SlSocialSpotify size={50}/>
    <p>Song Downloader</p>
    </div>
    <div
      className="flex gap-x-2">
      <input type="url" className="h-10 w-[450px] border-none outline-none px-5 rounded-lg" onChange={handleURL} value={URL}/>
      <button className="bg-white h-10 px-5 rounded-lg font-bold hover:bg-black hover:text-white" onClick={downloadSong}>Download</button>
    </div>

  </div>
  );
}

export default App;