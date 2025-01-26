import { productsItemProps } from "@/types/types"
import Image from "next/image"
import { FC } from "react"

const ProductItems: FC<productsItemProps> = ({ products, handleOpenModel }) => {
    return (
        <>
            {
                products.map((product, index) => {
                    const productImage = product.image.src
                    const productName = product.handle
                    const productTitle = product.title

                    let stockQuantity: number = 0

                    product.variants.forEach((variant: any) => {
                        stockQuantity += Number(variant.inventory_quantity)
                    });


                    return (
                        <div key={index} className="mx-32">

                            {/* image */}
                            <div className="w-[500px] h-[500px]">
                                <Image
                                    src={productImage}
                                    width={500}
                                    height={500}
                                    alt={productName}
                                    id={productName}
                                    className="image"
                                />
                            </div>

                            {/* text content */}
                            <div>
                                {/* name */}
                                <h2 className="text-2xl font-bold my-2">
                                    {productTitle}
                                </h2>

                                {/* stock */}
                                <p>
                                    {stockQuantity} items avaliable
                                </p>
                                {/* see more about it */}
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