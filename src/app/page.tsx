'use client'

import axios from "axios";
import { useEffect, useState } from "react";

type Tag = {
  name: string
  poster : string
  stock : number
}

export default function Home() {
  // font - [family - name:var(--font - roboto)]

  const [tags, setTags] = useState <Tag[]> ([])
  
  
  useEffect (() => {
    axios.get ('/api/tags')
      .then (response => {
        console.log (response.data)
      })
  }, [])

  return (
    <div>
      {/* welcome text */}
      <div>
        <h1>
          Hello, Welcome to Products Hunt
        </h1>
        <h3>
          The best place to find the best products
        </h3>
      </div>
      {/* end of welcome text */}


      {/* trending tags */}
      <div>
        <div>
          <h2>
            Trending Tags
          </h2>
        </div>

        <div>

        </div>
      </div>
      {/* end of trending tags */}
    </div>
  );
}
