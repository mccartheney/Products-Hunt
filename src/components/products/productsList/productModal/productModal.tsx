import { productModalProps } from "@/types/types"
import { FC } from "react"
import TypeIt from "typeit-react"

const ProductModal: FC<productModalProps> = ({ tagName, productName, variantsQuatity, openProductStock, handleCloseModel }) => {
    return (
        <div className="productModal closeModal relative ">
            <div className="mt-[500px] lg:ml-[500px] lg:mt-[90px]">
                <h1 className="text-4xl md:text-6xl lg:text-9xl font-[family-name:var(--font-oswald)]">
                    <TypeIt options={{
                        speed: 200,
                        startDelay: 3000,
                    }}>
                        {tagName}
                    </TypeIt>
                </h1>
            </div>
            <div className="mt-[40px] lg:ml-[500px] lg:mt-10">
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-lato)] font-bold">
                    {productName.replaceAll("-", " ")}
                </h3>
                <p className="mt-5 font-[family-name:var(--font-lato)] font-bold">
                    Stock of all variants: {openProductStock} items
                </p>
                <p className="font-[family-name:var(--font-lato)] font-bold">
                    Number of variants: {variantsQuatity}
                </p>
                <p className="font-[family-name:var(--font-lato)] font-bold">
                    Tags: {productName.replaceAll("-", ",")}
                </p>
            </div>
            
            <button onClick={handleCloseModel} className="closeButton absolute lg:top-[100px] right-5 md:top-10 md:right-10 border py-1 px-2 z-[1000]">
                Close
            </button>
        </div>
    )
}

export default ProductModal