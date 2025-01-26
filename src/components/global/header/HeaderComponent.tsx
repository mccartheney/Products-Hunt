import { FC } from "react"

const Header: FC = () => {
    return (
        <div className="fixed flex items-center justify-between z-20 top-0 left-0 w-screen h-20 backdrop-blur-sm bg-[#ffffff9d]">
            <h1 className="mx-10 font-bold text-xl font-[family-name:var(--font-oswald)]">
                Products Hunt
            </h1>

            <a href="/" className="mx-10 text-md font-[family-name:var(--font-lato)] hover:underline hover:scale-110 duration-200">Tags</a>
        </div>
    )
}

export default Header