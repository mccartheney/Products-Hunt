'use client'

import { Tag } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import TitleWriting from "@/components/home/welcome/titleWriting/TitleWriting";
import TrandingTags from "@/components/home/trendingTags/TrandingTags";
import AllTags from "@/components/home/allTags/AllTags";
import Welcome from "@/components/home/welcome/Welcome";

export default function Home() {

  const [tags, setTags] = useState <Tag[]> ([])
  
  useEffect (() => {
    axios.get ('/api/tags')
      .then (response => {
        setTags ([...response.data])
      })
  }, [])

  return (
    <div>
      {/* new welcome section */}
      <Welcome tags={tags}/>
      {/* end new welcome section */}
      
      {/* trending tags */}
      <TrandingTags tags={tags} />
      {/* end of trending tags */}

      {/* all tags */}
      <AllTags tags={tags}/>
      {/* end of all tags */}
    </div>

    
  );
}
