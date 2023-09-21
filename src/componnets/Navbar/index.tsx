import { HStack } from "@chakra-ui/react";
import { LinkNavbar } from "../Links";

export function Navbar(){
    return(
        <HStack
        bg={"yellow"}
        py={40}
        justify={"center"}
        >
            <LinkNavbar href={""} text={"home"}/>
            <LinkNavbar href={""} text={"contato"}/>
            <LinkNavbar href={""} text={"membros"}/>
            <LinkNavbar href={""} text={"gerenciamento"}/>
            <LinkNavbar href={""} text={"login"}/>

        </HStack>
    )
}