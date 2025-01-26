import { productModalProps } from "@/types/types"
import { FC } from "react"
import TypeIt from "typeit-react"

const ProductModal : FC<productModalProps> = ({ tagName, openProductPrice, openProductStock, handleCloseModel}) => {
    

    return (
        <div className="productModal closeModal relative">
            {/* modal title */}
            <div className="ml-[550px] mt-20">
                <h1 className="text-9xl font-[family-name:var(--font-oswald)]">
                    <TypeIt options={{
                        speed: 200,
                        startDelay: 3000,
                    }}>
                        {tagName}
                    </TypeIt>
                </h1>
            </div>
            {/* modal content */}
            <div>
                <h3 className="ml-[550px] mt-10 font-[family-name:var(--font-lato)] font-bold">
                    Price : {openProductPrice}$
                </h3>

                <p className="ml-[550px] font-[family-name:var(--font-lato)] font-bold">
                    stock of all variants : {openProductStock}
                </p>
            </div>

            <button onClick={handleCloseModel} className="closeButton absolute top-20 right-10 border py-1 px-2">
                close
            </button>
        </div>
    )
}

export default ProductModal