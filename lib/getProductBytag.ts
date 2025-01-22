const getProductByTag = (
    allData : any,
    tag : string
) => {
    // array to save the correpodents products
    let searchedProducts : Array<any> = []

    // loop throught products
    allData.forEach((product : any) => {
        // get products tag
        const productsTags = product.tags.split(", ")

        // if the product have the chosen tag add it to a array of searched products
        if (productsTags.includes(tag)) {
            searchedProducts.push(product)
        }
    });

    // return all searched products
    return searchedProducts
}

export default getProductByTag