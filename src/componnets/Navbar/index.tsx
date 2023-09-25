import { HStack, Stack } from "@chakra-ui/react";
import { LinkNavbar } from "../Links";
import { Image } from "../../../src/componnets/Image";

export function Navbar(){
    return(
        <HStack
        bg={"yellow"}
        py={2}
        justify={"center"}
        spacing={16}
        position={'sticky'}
        top={0}
        >
            <Image src={"/imagens/Logo.png"} alt={"logo"} width={120} height={40}/>

            <Stack bg={"lightblack"} px={16} py={2} borderRadius={"16px"} textColor={"yellow"}>
            <LinkNavbar href={"."} text={"HOME"}/>
                </Stack>
            <Stack bg={"lightblack"} px={14} py={2} borderRadius={"16px"} textColor={"yellow"}>
            <LinkNavbar href={"/contato"} text={"CONTATO"}/>
                </Stack>
            <Stack bg={"lightblack"} px={12} py={2} borderRadius={"16px"} textColor={"yellow"}>
            <LinkNavbar href={"/membros"} text={"MEMBROS"}/>
                </Stack>
            <Stack bg={"lightblack"} px={8} py={2} borderRadius={"16px"} textColor={"yellow"}>
            <LinkNavbar href={"/gerenciamento"} text={"GERENCIAMENTO"}/>
                </Stack>
            <Stack bg={"lightblack"}px={16} py={2} borderRadius={"16px"} textColor={"yellow"}>
            <LinkNavbar href={"/login"} text={"LOGIN"}/>
                </Stack>
        </HStack>
    )
}