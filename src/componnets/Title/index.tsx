import { Heading } from "@chakra-ui/react"

interface TitleServicesProps{
    title : string
    size: string
    color: string
    
}

export function TitleServices({title, size, color}:TitleServicesProps){
    return(
        <Heading
            as = "h3"
            fontSize={size}
            fontWeight={"400px"}
            color={color}
        >     
            {title}   
        </Heading>
    )
}
interface TitleIndexProps{
    color : string
    text: string 
}

export function TitleIndex({text, color}:TitleIndexProps){
    return(
        <Heading
            as = "h1"
            fontSize={"64px"}
            color={color}
            fontWeight={"400px"}
        >     
            {text}   
        </Heading>
    )
}
