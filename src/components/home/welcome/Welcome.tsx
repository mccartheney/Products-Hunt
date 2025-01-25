import TitleWriting from "./titleWriting/TitleWriting"
import LogoWall from "./logoWall/LogoWall";
import { Tag } from "@/types/types";
import { FC } from "react";

// TODO: put this on external file 
type TrandingTagsProps = {
    tags : Tag[]
}

type LogoImagesType = {
    imgUrl : string,
    altText:string
}

const Welcome : FC<TrandingTagsProps>= ({tags}) => {
    let logoImgs : LogoImagesType[] = []

    tags.forEach(tag => {
        console.log(tag.imageUrl)
        logoImgs.push ({
            imgUrl : tag.imageUrl,
            altText: tag.name
        })

    });

    return (
        <div className="flex h-screen w-screen ">
            <div className="flex justify-center items-center h-full w-1/2">
                <TitleWriting/>
            </div>
            <div className="flex justify-center items-center h-full w-1/2">
                <LogoWall
                    items={logoImgs}
                    direction='vertical'
                    pauseOnHover={false}
                    size='400px'
                    duration='120s'
                    bgColor='#fffff'
                    bgAccentColor='#fffff'
                />  
            </div>
        </div>
    )
}

export default Welcome