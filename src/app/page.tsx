'use client'

import { Tag } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'
import TitleWriting from "@/components/home/titleWriting/TitleWriting";
import TrandingTags from "@/components/home/trendingTags/TrandingTags";
import AllTags from "@/components/home/allTags/AllTags";

export default function Home() {
  // font - [family - name:var(--font - roboto)]

  const [tags, setTags] = useState <Tag[]> ([])
  
  useEffect (() => {
    axios.get ('/api/tags')
      .then (response => {
        setTags ([...response.data])
      })
  }, [])

  return (
    <div>
      {/* welcome text */}
      <TitleWriting />
      {/* end of welcome text */}
      
      {/* trending tags */}
      <TrandingTags tags={tags} />
      {/* end of trending tags */}

      {/* all tags */}
      <AllTags tags={tags}/>
      {/* end of all tags */}
    </div>

    
  );
}
