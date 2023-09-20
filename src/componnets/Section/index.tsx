import { Flex, Stack } from "@chakra-ui/react";
import { TitleIndex } from "../Title";
import { TextServices } from "../../../gkfootball/src/componnets/Text";

export function SectionIndex(){
    return(
        <Stack
        bgImage="url('/imagens/GPcamisas.jpg')"
        bgRepeat={"no-repeat"}
        bgSize={"100%"}
        py={200}
        >
        </Stack>
    )
}
export function SectionIndex2(){
    return(
    <Stack
    background={"#222121"}
    >
        <Stack
        w={"50%"}
        >
            <Stack
            >
            <TitleIndex color={"#ffff"} text={"COMPROU,"}/>
            </Stack>
            <Stack
            px={150}
            >
            <TitleIndex color={"#ffff"} text={"VESTIU,"}/>
            </Stack>
            <Stack
            px={280}
            >
            <TitleIndex color={"#ffff"} text={"É GOL!"}/>
            </Stack>
            
        </Stack>
        
        <Stack
        w={"50%"}
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
    </Stack>
    )
}
