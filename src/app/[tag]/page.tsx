'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { useParams } from "next/navigation"
import { motion } from 'framer-motion'

const tagPage = () => {
    const params = useParams()
    const { tag } = params
    const [products, setProducts] = useState<any[]>([])
    const [isExpanded, setIsExpanded] = useState<boolean>(false)


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
            <div className="">
                <h1 className="">
                    {tag}
                </h1>
            </div>
            {/* end of title */}

            {/* //todo a div with horizontal scroll that shows all tags ("the actual tag will be highligted") */}
            {/* tagList */}
            {/* end of tagList */}


            {/* //TODO: create a logic to make it open and close with motion */}
            {/* productsList */}
            <div className="">
                {
                    products.map((product, index) => {
                        const productImage = product.image.src
                        const productName = product.handle
                        const productPrice = product.variants[0].price
                        console.log()

                        return (
                            <div key={index}>

                                {/* image */}
                                <div>
                                    <Image
                                        src={productImage}
                                        width={500}
                                        height={500}
                                        alt={productName}
                                    />
                                </div>

                                {/* text content */}
                                <div>
                                    {/* name */}
                                    <h2>
                                        {productName}
                                    </h2>

                                    {/* price */}
                                    <p>
                                        {productPrice}
                                    </p>
                                    {/* see more about it */}
                                    <button>
                                        see more
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* end of Products List */}
        </div>


    )
}

export default tagPage