'use client'


import "./page.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { useParams } from "next/navigation"
import { motion } from 'framer-motion'
import TypeIt from "typeit-react"

const tagPage = () => {
    const params = useParams()
    const { tag } = params
    const [products, setProducts] = useState<any[]>([])
    const [openProduct, setOpenProduct] = useState<string>()
    const [openProductStock, setOpenProductStock] = useState<number>()
    const [openProductPrice, setOpenProductPrice] = useState<number>()
    const [initialImagePosition, setInitialImagePosition] = useState ({
        posX:0,
        posY:0
    })

    const handleOpenModel = (productName : string) => {
        const productImage : HTMLElement = document.querySelector(`#${productName}`)!
        const imagePosition = productImage.getBoundingClientRect()

        productImage.style.top = `${imagePosition.top}px`;
        productImage.style.left = `${imagePosition.left}px`;
        
        
        setInitialImagePosition({
            posX : imagePosition.left,
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
        
                        product.variants.forEach((variant : any) => {
                            stockQuantity += Number(variant.inventory_quantity)
                        });
                    }
                });
            }
        });

        setOpenProductStock(stockQuantity)
        setOpenProduct (productName)
    }

    const handleCloseModel = () => {
        const productModal: HTMLElement = document.querySelector(".productModal")!
        productModal.classList.add ("closeModal")

        var root : HTMLElement = document.querySelector(':root')!;
        root!.style.setProperty('--image-top-inicial', `${initialImagePosition.posY}px`);
        root!.style.setProperty('--image-left-inicial', `${initialImagePosition.posX}px`);

        const productImage : HTMLElement= document.querySelector(`#${openProduct}`)!
        
        
        setTimeout (() => {
            productImage.classList.remove("imageOpen")
            productImage.classList.add("imageClosed")

            setTimeout (() => {
                productImage.classList.remove("imageClosed")

            },500)
        },800)
        document.querySelector("body")!.style.overflow = "auto"
    }

    useEffect(() => {
        axios.get(`/api/products?tag=${tag}`)
            .then(response => {
                setProducts([...response.data])
            })
    }, [])


    return (
        <div className="">

            {/* //TODO : make a header to add here */}
            {/* header */}

            {/* title */}
            <div className="m-10">
                <h1 className="text-9xl font-[family-name:var(--font-oswald)]">
                    <TypeIt>
                        {tag}
                    </TypeIt>
                </h1>
            </div>
            {/* end of title */}

            {/* //todo a div with horizontal scroll that shows all tags ("the actual tag will be highligted") */}
            {/* tagList */}
            {/* end of tagList */}


            {/* //TODO: create a logic to make it open and close with motion */}
            {/* productsList */}
            <div className="flex flex-wrap w-screen justify-center items-center">
                {
                    products.map((product, index) => {
                        const productImage = product.image.src
                        const productName = product.handle
                        const productTitle = product.title

                        let stockQuantity : number = 0

                        product.variants.forEach((variant : any) => {
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
                                    <button onClick={() => { handleOpenModel(productName)}} className="my-2 border py-2 px-4 border-black">
                                        see more →
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* end of Products List */}

            {/* modal */}
            <div className="productModal closeModal relative ">
                {/* modal title */}
                <div className="ml-[550px] mt-20">
                    <h1 className="text-9xl font-[family-name:var(--font-oswald)]">
                        <TypeIt options={{
                            speed:200,
                            startDelay: 3000,
                        }}>
                            {tag}
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
                    
                <button onClick={handleCloseModel} className="closeButton absolute top-10 right-10 border py-1 px-2">
                    close
                </button>
            </div>

            {/* end of modal */}
        </div>


    )
}

export default tagPage