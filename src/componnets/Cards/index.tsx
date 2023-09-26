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
            bg={"lightblack"}
            w={"35%"}
            fontFamily={"bayon"}
        >

            <Box
                bg={"yellow"}
                width={"100%"}
                height={"80px"}
                borderRadius={"16px 16px 0 0"}
                textAlign={"center"}
                py={4}
            >
                <TitleServices title={"Seja Bem Vindo(a)!"} size={"36px"} color={"black"}></TitleServices>
            </Box>

            <Stack
                spacing={16} py={4} px={2} align={"center"}
            >
                <Image src={"/imagens/Logo.png"} alt={"logo"} width={250} height={80}/>
                <Stack w={"100%"} px={16}>
                    <InputIndex label={"Email:"} type={"email"} w={"100%"} placeholder={"Digite seu email:"} color={"white"} />
                    <InputIndex label={"Senha:"} type={"password"} w={"100%"} placeholder={"Senha:"} color={"white"}/> 
                </Stack>
                <ButtonLogin textButton={"ENTRAR"} href={"/gerenciamento"}/>
            </Stack>
       
        </Stack>
    )
}