
const getAllTags = (
    allData : any
) : Array<string> => {
    // array to save tags
    let allTags : Array<string> = [] 

    // loop through products
    allData.products.forEach((product : any) => {
        // get a array of products tag
        const tags = product['tags'].split(', ')

        // loop through array of product tags
        tags.forEach((tag : string) => {
            // if that tag is already storaged pass
            // otherwise storage it

            if (! allTags.includes (tag)) {
            allTags.push(tag)
            }

        });
    });

    return allTags
}

export default getAllTags