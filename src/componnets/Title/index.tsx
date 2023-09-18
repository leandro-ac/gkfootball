import { Heading } from "@chakra-ui/react"

interface TitleServicesProps{
    title : string
}

export function TitleServices({title}:TitleServicesProps){
    return(
        <Heading
            as = "h3"
            fontSize={"14px"}
            fontWeight={"400px"}
        >     
            {title}   
        </Heading>
    )
}
