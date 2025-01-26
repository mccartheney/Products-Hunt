'use client'

import { Tag } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import TrandingTags from "@/components/home/trendingTags/TrandingTags";
import AllTags from "@/components/home/allTags/AllTags";
import Welcome from "@/components/home/welcome/Welcome";
import Header from "@/components/global/header/HeaderComponent";
import TagList from "@/components/global/tagList/TagListComponent";

export default function Home() {

  // define tags statement and get tags from api
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    axios.get('/api/tags')
      .then(response => {
        setTags([...response.data])
      })
  }, [])

  return (
    <div>
      <Header />
      <Welcome tags={tags} />
      <TrandingTags tags={tags} />
      <TagList tags={tags} />
      <AllTags tags={tags} />
    </div>


  );
}
