export type Tag = {
    name: string;
    poster: string;
    stock: number;
    imageUrl : string;
};


export type LogoImagesType = {
    imgUrl: string,
    altText: string
}

export type initialPosition = {
    posX: number,
    posY: number
}

export type TrandingTagsProps = {
    tags: Tag[]
}

export type ProductTitleProps = {
    tagName : string
}

export type productsListProps = {
    products : any[]
    tagName: string
}

export type productsItemProps = {
    products : any[]
    handleOpenModel: (productName : string) => void
}

export type productModalProps = {
    tagName : string
    openProductPrice : number
    openProductStock : number
    handleCloseModel : () => void
}