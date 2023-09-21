import { HStack, Stack } from "@chakra-ui/react";
import { TitleIndex } from "../Title";
import { TextServices } from "../../../src/componnets/Text";
import { Image } from "../../../src/componnets/Image";

export function SectionIndex(){
    return(
        <Stack
        bgImage="url('/imagens/GPcamisas.jpg')"
        bgRepeat={"no-repeat"}
        bgSize={"100%"}
        py={180}
        >
        </Stack>
    )
}
export function SectionIndex2(){
    return(
    <HStack
    background={"#222121"}
    py={6}
    >
        <Stack
        w={"70%"}
        >
            <Stack
            px={50}
            >
            <TitleIndex color={"#ffff"} text={"COMPROU,"}/>
            </Stack>
            <Stack
            px={200}
            >
            <TitleIndex color={"#ffff"} text={"VESTIU,"}/>
            </Stack>
            <Stack
            px={270}
            >
            <TitleIndex color={"#ffff"} text={"É GOL!"}/>
            </Stack>
            
        </Stack>
        
        <Stack
        w={"70%"}
        px={50}
        >
            <Stack
            >
            <TextServices text={"Bem-vindo ao GK FOOTBALL!"} size={"32px"} color={"#FFFF"}/>
            </Stack>
            <Stack
            >
            <TextServices text={"Na nossa loja, você encontrará uma incrível variedade de camisas de futebol de clubes e seleções de todo o mundo. Nossa loja online oferece desde as últimas novidades até modelos clássicos e edições especiais, tudo para que você vista sua paixão!"} size={"32px"} color={"#FFFF"}/>
            </Stack>
        </Stack>
    </HStack>
    )
}

export function SectionContatos(){
    return(
    <HStack
    background={"lightblack"}
    py={0}
    >
        <Stack
        w={"70%"}
        px={220}
        >
        <TitleIndex color={"yellow"} text={"FALE COM A GENTE!"}/>    
        </Stack>
        
        <Stack
        
        >
        <Image src={"/imagens/GPCONTATO.png"} alt={"logo"} width={400} height={40}/>
        </Stack>
    </HStack>
    )
}

