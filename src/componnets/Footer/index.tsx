import { Stack, Text } from "@chakra-ui/react";

export function Footer(){
    return(
        <Stack
        p={10}
        align={"center"}
        bg={"yellow"}
        >
            <Text
            as={"p"}
            >
            Dúvidas:
            </Text>
            <Text
            as={"p"}
            >
            contato@gkfootball.com.br 
            </Text>
            <Text
            as={"p"}
            >
            Endereço:
            </Text>
            <Text
            as={"p"}
            >
            Rua José Lourenço Kelmer, UFJF,Instituto de Ciências Exatas, sala 3313            </Text>
        </Stack>
    )
}
