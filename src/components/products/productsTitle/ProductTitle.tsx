import { ProductTitleProps } from "@/types/types"
import { FC } from "react"
import TypeIt from "typeit-react"

const ProductTitle : FC<ProductTitleProps> = ({tagName}) => {
    return (
        <div className="m-20 mb-10">
            <h1 className="text-9xl font-[family-name:var(--font-oswald)]">
                <TypeIt>
                    {tagName}
                </TypeIt>
            </h1>
        </div>
    )
}

export default ProductTitle