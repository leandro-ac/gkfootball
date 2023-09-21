import { HStack } from "@chakra-ui/react";
import { LinkNavbar } from "../Links";
import { Image } from "../../../gkfootball/src/componnets/Image";

export function Navbar(){
    return(
        <HStack
        bg={"yellow"}
        py={8}
        justify={"center"}
        spacing={40}
        position={'sticky'}
        top={0}
        >
            <Image src={"/imagens/Logo.png"} alt={"logo"} width={120} height={40} />
            <LinkNavbar href={""} text={"HOME"}/>
            <LinkNavbar href={""} text={"CONTATO"}/>
            <LinkNavbar href={""} text={"MEMBROS"}/>
            <LinkNavbar href={""} text={"GERENCIAMENTO"}/>
            <LinkNavbar href={""} text={"LOGIN"}/>

        </HStack>
    )
}