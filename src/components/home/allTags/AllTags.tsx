import { Tag } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

// TODO: put this on external file 
type TrandingTagsProps = {
    tags: Tag[]
}

const AllTags : FC<TrandingTagsProps> = ({tags}) => {

    return (
        <div className="flex flex-wrap justify-between mx-10">
            {
                tags.map((tag: Tag, index: number) => {
                    return (
                        <a key={tag.name} href={`/${tag.name}`}>
                            <div className="flex bg-[#27272a] p-5 m-5 rounded-3xl shadow-md shadow-[#a398981f]">
                                <div >
                                    <Image
                                        className="rounded-3xl mr-4"
                                        src={tag.poster}
                                        alt={tag.name}
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3 className="my-1 font-[family-name:var(--font-oswald)] text-2xl">
                                        {tag.name}
                                    </h3>
                                    <p className="my-2 font-[family-name:var(--font-lato)] ">
                                        {tag.stock} Products avaliable
                                    </p>
                                </div>
                            </div>
                        </a>
                    )
                })

            }
        </div>
    )

}


export default AllTags;