import { FC } from "react";
import TypeIt from "typeit-react";

// TODO: Create a carrosol for the images behind the text

const TitleWriting: FC = () => {
    return (
        <div className="m-10 z-10">
            <TypeIt
                getBeforeInit={(instance) => {
                    instance
                        .type('<h1 class="text-9xl font-[family-name:var(--font-oswald)]">Hello, Welcome to Products Hunt</h1>')
                        .break() 
                        .type('<h3 class="text-5xl font-[family-name:var(--font-lato)">The best place to find the best products</h3>');
                        
                    return instance;
                }}
                
                options={{
                    loop: false,
                    waitUntilVisible: true,
                    speed: 30
                }}
            
            />
        </div>
    )
}

export default TitleWriting