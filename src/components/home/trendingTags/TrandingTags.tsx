import { Tag } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

// TODO: put this on external file 
type TrandingTagsProps = {
    tags : Tag[]
}

const TrandingTags : FC<TrandingTagsProps> = ({tags}) => {

    return (
        <div className="mx-10">
            <div>
                <h2 className="text-4xl font-[family-name:var(--font-oswald)] mb-5">
                Trending Tags
                </h2>
            </div>
    
            <div className="flex justify-between overflow-x-scroll">
                {
                    tags.map ((tag : Tag, index: number) => {
                    if (index < 4) {
                        return (
                        <a key={tag.name} href={`/${tag.name}`}>
                                <div className="bg-[#27272a] p-5 m-5 rounded-3xl shadow-md shadow-[#a398981f] ">
                                <div>
                                    <Image
                                        className="rounded-3xl"
                                        src={tag.poster}
                                        alt={tag.name}
                                        width={450}
                                        height={450}
                                    />
                                </div>

                                <div>
                                    <h3 className="my-2 font-[family-name:var(--font-oswald)] text-2xl ">
                                        {tag.name}
                                    </h3>
                                        <p className="my-2 font-[family-name:var(--font-lato)] ">
                                        {tag.stock} Products avaliable
                                    </p>
                                </div>
                            </div>
                        </a>
                        )
                    }
                    })
    
                }
            </div>
            </div>
    )
}

export default TrandingTags;
