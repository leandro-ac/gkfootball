import { Text } from "@chakra-ui/react";

interface TextServicesProps{
    text:string
}

export function TextServices({text}:TextServicesProps){
    return(
        <Text
        as="p"
        color={""}
        fontSize={"12px"}
        fontWeight={"400px"}
        >
            {text}
        </Text>
    )
}