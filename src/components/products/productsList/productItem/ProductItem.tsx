import { productsItemProps } from "@/types/types"
import Image from "next/image"
import { FC } from "react"

const ProductItems: FC<productsItemProps> = ({ products, handleOpenModel }) => {
    return (
        <>
            {
                // loop through products
                products.map((product, index) => {

                    // products infos
                    const productImage: string = product.image.src
                    const productName: string = product.handle
                    const productTitle: string = product.title
                    let stockQuantity: number = 0

                    // get available stock
                    product.variants.forEach((variant: any) => {
                        stockQuantity += Number(variant.inventory_quantity)
                    });

                    return (
                        <div key={index} className="mx-5 my-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">

                            <div className="w-[500px] h-[500px]">
                                <Image
                                    src={productImage}
                                    width={500}
                                    height={500}
                                    alt={productName}
                                    id={productName}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold my-2">
                                    {productTitle}
                                </h2>

                                <p>
                                    {stockQuantity} items available
                                </p>
                                <button onClick={() => { handleOpenModel(productName) }} className="my-2 border py-2 px-4 border-black">
                                    see more →
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductItems