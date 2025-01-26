import { productModalProps } from "@/types/types"
import { FC } from "react"
import TypeIt from "typeit-react"

const ProductModal: FC<productModalProps> = ({ tagName, productName, variantsQuatity,openProductStock, handleCloseModel}) => {
    return (
        <div className="productModal closeModal relative">
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
            <div>
                <h3 className="ml-[550px] mt-5 text-2xl font-[family-name:var(--font-lato)] font-bold">
                    {productName.replaceAll("-", " ")}
                </h3>
                <p className="ml-[550px] mt-5 font-[family-name:var(--font-lato)] font-bold">
                    Stock of all variants : {openProductStock} items
                </p>
                <p className="ml-[550px] font-[family-name:var(--font-lato)] font-bold">
                    Number of variants : {variantsQuatity}
                </p>
                <p className="ml-[550px] font-[family-name:var(--font-lato)] font-bold">
                    tags : {productName.replaceAll("-", ",")}
                </p>
            </div>
            
            <button onClick={handleCloseModel} className="closeButton absolute top-20 right-10 border py-1 px-2">
                close
            </button>
        </div>
    )
}

export default ProductModal