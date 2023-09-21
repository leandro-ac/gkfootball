import { Box, Stack } from "@chakra-ui/react"

import { Image } from "../Image"
import { TitleServices } from "../Title"
import { TextServices } from "../Text"
import { InputIndex } from "../Form"
import { ButtonLogin } from "../Button"

interface CardServicesProps{
    src1: string
    alt1: string
    width1: number
    height1: number
    title: string
    text: string
    size: string
    
}

export function CardServices({src1, alt1, width1, height1,title, text, size,}:CardServicesProps){
    return(
        <Stack
            background={"#FFFFFF"}  
            as = "article"
            border = {"1px solid #FFFFFF"}
            px={8}
            py={12}
            borderRadius={"16px"}
            align={"center"}
        >   
        <Image src={src1} alt={alt1} width={width1} height={height1}/>
        <TitleServices title={title} size={size} color={""}/>
        <TextServices text={text} size={size} color={""}/>
        </Stack>
    )
}

export function CardLogin(){
    return(
        <Stack
        borderRadius={"16px"}
        spacing={0}
        
        bg={"#ffff"}
        w={"25%"}
        >

        <Box
        bg={"yellow"}
        width={"100%"}
        height={"80px"}
        borderRadius={"16px 16px 0 0"}
        />

        <Stack
        spacing={16}
        align={'center'}
        >
        <Stack
        w={"100%"}
        justify={"space-between"}
        px={16}
        >
            <InputIndex label={"Email"} type={"email"} w={"80%"} placeholder={"Digite seu email:"}/>
            <InputIndex label={"Senha"} type={"password"} w={"80%"} placeholder={"Senha:"}/>
        </Stack>
        <ButtonLogin textButton={"ENVIAR"} href={""}/>  
        </Stack>
        </Stack>
    )
}