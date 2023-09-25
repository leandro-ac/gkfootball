import { HStack, Stack } from "@chakra-ui/react";
import { TitleIndex } from "../Title";
import { TextServices } from "../../../src/componnets/Text";
import { Image } from "../../../src/componnets/Image";
import { InputIndex } from "../Form";
import { ButtonContato, ButtonLogin } from "../Button";

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
            <TitleIndex color={"#ffff"} text={"COMPROU,"} size={"64px"}/>
            </Stack>
            <Stack
            px={200}
            >
            <TitleIndex color={"#ffff"} text={"VESTIU,"} size={"64px"}/>
            </Stack>
            <Stack
            px={270}
            >
            <TitleIndex color={"#ffff"} text={"É GOL!"} size={"64px"}/>
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
    background={"lightblack"} py={0}
    >
        <Stack w={"70%"} px={280}>
        <TitleIndex color={"yellow"} text={"FALE COM A GENTE!"} size={"48px"}/>    
        </Stack>
        <Image src={"/imagens/GPCONTATO.png"} alt={"logo"} width={400} height={40}/>
    </HStack>
    )
}
export function SectionContatos2(){
    return(
    <HStack
    background={"black"} py={8}
    >
        <Stack w={"50%"} px={24}>
            <TextServices text={"A GK FOOTBALL é uma empresa dedicada à paixão pelo futebol, oferecendo uma incrível variedade de camisas de futebol autênticas para os entusiastas do esporte. Nossa coleção abrange desde os times clássicos até as equipes contemporâneas mais renomadas, proporcionando aos torcedores a oportunidade de vestir o orgulho de sua equipe do coração. Nosso foco na qualidade é inigualável, utilizando materiais premium para garantir um conforto incomparável durante os jogos e eventos esportivos. Na GK FOOTBALL, celebramos a conexão emocional entre os torcedores e o esporte, fornecendo produtos que capturam a essência vibrante e empolgante do futebol."} size={"24px"} color={"yellow"}/>
        </Stack>

        <Stack align={"center"}> 
                <TextServices text={"Nos mande uma mensagem através do email:"} size={"28px"} color={"#ffff"}/>
                <TextServices text={"contato@gkfootball.com.br"} size={"28px"} color={"#ffff"}/>
            <Stack  align={"center"} spacing={4} w={"100%"}>
                <InputIndex label={"Nome"} type={"Name"} w={"100%"} placeholder={""} color={"White"}/>
                <InputIndex label={"Email"} type={"email"} w={"100%"} placeholder={""} color={"White"}/>
                <InputIndex label={"Mensagem"} type={"text"} w={"100%"} placeholder={""} color={"White"}/>
                <ButtonContato textButton={"ENVIAR"} href={""}/>
            </Stack>
        </Stack>
    </HStack>
    )
}
export function SectionContatos3(){
    return(
    <HStack
    background={"#ffff"} py={40} align={"center"} justify={"center"} spacing={12}
    >
        <HStack>
        <Image src={"/imagens/ig.png"} alt={"ig"} width={80} height={60} />
        <TextServices text={"| @gkfootball"} size={"48px"} color={"black"}/>
        </HStack>

        <HStack>
        <Image src={"/imagens/facebook.png"} alt={"facebook"} width={70} height={60} />
        <TextServices text={"| @gkfootball"} size={"48px"} color={"black"}/>
        </HStack>
        
        <HStack>
        <Image src={"/imagens/wpp.png"} alt={"whatsapp"} width={60} height={60} />
        <TextServices text={"| (32) 99999-9999 "} size={"48px"} color={"black"}/>
        </HStack>
    </HStack>
    )
}

