import { Tag, TrandingTagsProps } from "@/types/types"
import { useParams } from "next/navigation"
import { FC } from "react"

const TagList : FC<TrandingTagsProps> = ({tags}) => {
    const params = useParams()
    const { tag } = params
    return (
        <div className="flex overflow-x-scroll p-2 border border-y border-black">
            {
                tags.map ((tagItem : Tag, index) => {
                    const tagUrl = `/${tagItem.name}`
                    let actualTagClasses = ""

                    if (tag == tagItem.name) actualTagClasses = "underline scale-105 "

                    return (
                        <a key={index} href={tagUrl} className={`${actualTagClasses} mx-5 font-[family-name:var(--font-lato) hover:underline hover:scale-105 duration-200`}>
                            {tagItem.name}
                        </a>
                    )
                })  
            }
        </div>
    )
}

export default TagList