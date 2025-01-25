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
                        <a key={tag.name} href={`/${tag.name}`} className="">
                            <div className="product flex flex-col p-5 m-5 rounded-3xl ">
                                <div >
                                    <Image
                                        className="rounded-3xl mr-4 mb-10 hover:scale-125  hover:translate-y-24 hover:shadow-xl duration-300 z-0"
                                        src={tag.poster}
                                        alt={tag.name}
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className="flex flex-col justify-center z-10">
                                    <h3 className="mb-3 font-[family-name:var(--font-oswald)] text-2xl  w-min p-2 backdrop-blur-md rounded-2xl">
                                        {tag.name}
                                    </h3>
                                    <p className="my-2 p-2 w-fit rounded-2xl backdrop-blur-md font-[family-name:var(--font-lato)] ">
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