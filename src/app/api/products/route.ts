import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import getAllData from "../../../../lib/getAllData";
import getAllTags from "../../../../lib/getAllTags";
import getProductByTag from "../../../../lib/getProductBytag";

const GET = async (
    request : NextApiRequest
) => {
    // get tag from user (by url params)
    const requestParams = new URL (request.url!)
    const tag : string = requestParams.searchParams.get("tag")!
    const formatedTag = tag.replaceAll('"', "")

    // if the user dont send the tag send a error
    if (!tag) return NextResponse.json(
        {message: "The param 'tag' is necessary to search products."},
        {status : 400}
    )

    // get all data and tags
    const allData = await getAllData()
    const allTags = getAllTags(allData)
    
    // check if tag exist, if dont send a error
    if (!allTags.includes(formatedTag)) return NextResponse.json (
        {message : `The tag ${tag} dont exist.`},
        {status:400}
    )

    // get products by tag
    const productsByTag = getProductByTag(allData.products, formatedTag)

    // send the array of products
    return NextResponse.json(productsByTag)
}

export {GET}