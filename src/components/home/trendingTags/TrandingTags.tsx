import { Tag, TrandingTagsProps } from "@/types/types";
import { FC } from "react";

const TrandingTags : FC<TrandingTagsProps> = ({tags}) => {

    return (
        <div className="m-10">
            <div>
                <h2 className="text-4xl lg:mt-0 font-[family-name:var(--font-oswald)] mb-5 md:text-6xl mt-[400px]">
                Trending Tags
                </h2>
            </div>

            <div className="flex flex-wrap justify-between overflow-x-scroll">
                {
                    tags.map ((tag:Tag, index:number) => {
                        if (index < 4) {
                            return (
                                <figure key={index} className="group border border-black rounded-xl m-5 shadow-lg shadow-black overflow-hidden cursor-pointer relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <img
                                        src={tag.poster}
                                        alt={tag.name}
                                        className="w-full h-auto transition-transform duration-400 group-hover:scale-125"
                                    />
                                    <figcaption
                                        className="absolute inset-0 grid items-end text-transparent font-bold text-2xl p-3 bg-gradient-to-t from-black/60 to-transparent transition-[clip-path] duration-400 group-hover:text-white group-hover:[clip-path:inset(0_0_0_0)] [clip-path:inset(0_100%_0_0)]"
                                    >
                                        {tag.name}
                                    </figcaption>
                                </figure>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TrandingTags;