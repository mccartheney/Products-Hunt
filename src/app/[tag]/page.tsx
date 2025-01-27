'use client'

import "./page.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
import Header from "@/components/global/header/HeaderComponent"
import TagList from "@/components/global/tagList/TagListComponent"
import { Tag } from "@/types/types"
import ProductTitle from "@/components/products/productsTitle/ProductTitle"
import ProductsList from "@/components/products/productsList/ProductsList"

const tagPage = () => {
    // get tags through params
    const params = useParams()
    const { tag } = params
    // states to manange tags and products 
    const [tags, setTags] = useState <Tag[]>()
    const [products, setProducts] = useState<any[]>([])


    // use effect to get products and all tags
    useEffect(() => {
        axios.get(`/api/products?tag=${tag}`)
            .then(response => {
                setProducts([...response.data])
            })
        
        axios.get("/api/tags")
            .then(response => {
                setTags([...response.data])
            })
    }, [])

    // if tags or products isnt loaded show loading Page
    if (!tags || !products) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <h1 className="text-5xl font-bold">
                    loading
                </h1>    
            </div>
        )
    }

    return (
        <>
            <Header />
            <ProductTitle tagName={String(tag)}/> 
            <TagList tags={tags!}/>
            <ProductsList products={products} tagName={String(tag)}/>
        </>
    )
}
export default tagPage