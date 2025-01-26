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
    const params = useParams()
    const { tag } = params
    const [tags, setTags] = useState <Tag[]>()
    const [products, setProducts] = useState<any[]>([])


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

    if (!tags) {
        return (
            <h1>
                loading
            </h1>    
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