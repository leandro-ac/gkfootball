import { Stack } from "@chakra-ui/react"

import { Image } from "../Image"
import { TitleServices } from "../Title"
import { TextServices } from "../Text"

interface CardServicesProps{
    src1: string
    alt1: string
    width1: number
    height1: number
    title: string
    text: string
    size: string
}

export function CardServices({src1, alt1, width1, height1,title, text, size}:CardServicesProps){
    return(
        <Stack
            as = "article"
            border = {"1px solid #FFFFFF"}
            px={6}
            py={9}
            borderRadius={"16px"}
            align={"center"}
        >   
        <Image src={src1} alt={alt1} width={width1} height={height1}/>
        <TitleServices title={title} size={size}/>
        <TextServices text={text}/>
        </Stack>
    )
}