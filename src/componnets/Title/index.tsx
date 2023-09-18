import { Heading } from "@chakra-ui/react"

interface TitleServicesProps{
    title : string
    size: string
}

export function TitleServices({title, size}:TitleServicesProps){
    return(
        <Heading
            as = "h3"
            fontSize={size}
            fontWeight={"400px"}
        >     
            {title}   
        </Heading>
    )
}
