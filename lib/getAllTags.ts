import { Tag } from "@/types/types";
import getProductByTag from "./getProductBytag";

type tagsType = "object" | "array"

const getAllTags = (
    allData : any,
    typeOfReturn : tagsType
) : Array<Tag | string> => {
    // array to save tags
    let allTags : Array<string> = [] 
    let allObjectTags : Array<Tag> = []

    // loop through products
    allData.products.forEach((product : any) => {
        // get a array of products tag
        const tags = product['tags'].split(', ')

        // loop through array of product tags
        tags.forEach((tag : string) => {
            // if that tag is already storaged pass
            // otherwise storage it

            if (! allTags.includes (tag)) {
                const productsWithThisTag = getProductByTag(allData.products, tag)
                
                // tags infos
                const tagName = tag
                const tagPoster = productsWithThisTag[Math.floor(Math.random() * productsWithThisTag.length)].images[0].src
                const tagStock = productsWithThisTag.length
                const tagImage = productsWithThisTag[0].images[0].src

                const tagObject : Tag = {
                    name : tagName, 
                    poster : tagPoster, 
                    stock : tagStock,
                    imageUrl : tagImage
                }
                
                allTags.push(tag)
                allObjectTags.push(tagObject)
            }

        });
    });

    if (typeOfReturn === "array") return allTags
    return allObjectTags
}

export default getAllTags