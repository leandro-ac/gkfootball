import { Button } from "@chakra-ui/react";
import NextLink from "next/link"

interface ButtonLoginProps{
    textButton: string
    href: string
}

export function ButtonLogin({textButton, href}:ButtonLoginProps){
    return(
        <Button
            as={NextLink}
            href={href}
            bg={"yellow"}
            fontSize={"24px"}
            fontWeight={400}
            w={"50%"}
            py={2}
            fontFamily={"bayon"}  
        >    
        {textButton}
        </Button>
    )
}
export function ButtonContato({textButton, href}:ButtonLoginProps){
    return(
        <Button
            as={NextLink}
            href={href}
            bg={"yellow"}
            fontSize={"24px"}
            fontWeight={400}
            w={"50%"}
            py={2}
            fontFamily={"bayon"}  
        >    
        {textButton}
        </Button>
    )
}