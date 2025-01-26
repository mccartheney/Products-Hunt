import { initialPosition, productsListProps } from "@/types/types"
import Image from "next/image"
import { FC, useState } from "react"
import TypeIt from "typeit-react"
import ProductItems from "./productItem/ProductItem"
import ProductModal from "./productModal/productModal"

const ProductsList :FC<productsListProps> = ({products,tagName}) => {
    
    const [openProduct, setOpenProduct] = useState<string>("")
    const [openProductStock, setOpenProductStock] = useState<number>(0)
    const [openProductPrice, setOpenProductPrice] = useState<number>(0)
    const [initialImagePosition, setInitialImagePosition] = useState<initialPosition>({
        posX: 0,
        posY: 0
    })


    const handleCloseModel = () => {
        const productModal: HTMLElement = document.querySelector(".productModal")!
        productModal.classList.add("closeModal")

        var root: HTMLElement = document.querySelector(':root')!;
        root!.style.setProperty('--image-top-inicial', `${initialImagePosition.posY}px`);
        root!.style.setProperty('--image-left-inicial', `${initialImagePosition.posX}px`);

        const productImage: HTMLElement = document.querySelector(`#${openProduct}`)!


        setTimeout(() => {
            productImage.classList.remove("imageOpen")
            productImage.classList.add("imageClosed")

            setTimeout(() => {
                productImage.classList.remove("imageClosed")

                document.querySelector("body")!.style.overflow = "auto"
            }, 500)
        }, 800)
    }
    
    const handleOpenModel = (productName: string) => {
        const productImage: HTMLElement = document.querySelector(`#${productName}`)!
        const imagePosition = productImage.getBoundingClientRect()

        productImage.style.top = `${imagePosition.top}px`;
        productImage.style.left = `${imagePosition.left}px`;


        setInitialImagePosition({
            posX: imagePosition.left,
            posY: imagePosition.top
        })

        productImage.classList.add("imageOpen")

        document.querySelector(".productModal")?.classList.add("openModal")
        document.querySelector(".productModal")?.classList.remove("closeModal")
        document.querySelector("body")!.style.overflow = "hidden"

        let stockQuantity = 0

        products.forEach(product => {
            if (productName == product.handle) {
                setOpenProductPrice(Number(product.variants[0].price))

                products.forEach(product => {
                    if (productName == product.handle) {
                        setOpenProductPrice(Number(product.variants[0].price))

                        product.variants.forEach((variant: any) => {
                            stockQuantity += Number(variant.inventory_quantity)
                        });
                    }
                });
            }
        });

        setOpenProductStock(stockQuantity)
        setOpenProduct(productName)
    }

    return (
        <div className="flex flex-wrap w-screen justify-center items-center">
            <ProductItems products={products} handleOpenModel={handleOpenModel}/>
            <ProductModal tagName={tagName} openProductPrice={openProductPrice} openProductStock={openProductStock} handleCloseModel={handleCloseModel}/>
        </div>
    )

}

export default ProductsList