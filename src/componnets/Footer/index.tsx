import { Stack, HStack, Text, Image } from "@chakra-ui/react";

export function Footer(){
    return(
        <HStack
        bg={"yellow"}
        justify={"center"}
        spacing={40}
        >
            <Image src={"/imagens/logos.png"} alt={"logo"} width={40} height={40} />    
        
            <Stack
            p={10} 
            align={"center"}
            >
                <Text as={"p"}>
                Dúvidas:
                    </Text>
                <Text as={"p"}>
                contato@gkfootball.com.br 
                    </Text>
                <Text as={"p"}>
                Endereço:
                    </Text>
                <Text as={"p"}>
                Rua José Lourenço Kelmer, UFJF,Instituto de Ciências Exatas, sala 3313
                    </Text>            
            </Stack>

            <Image src={"/imagens/Logo.png"} alt={"logo"} width={40} height={40} /> 
        </HStack>
    )
}
