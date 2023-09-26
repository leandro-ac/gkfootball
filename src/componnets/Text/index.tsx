import { Text } from "@chakra-ui/react";

interface TextServicesProps{
    text:string
    size:string
    color:string
}

export function TextServices({text, size, color}:TextServicesProps){
    return(
        <Text
        as="p"
        color={color}
        fontSize={size}
        fontWeight={"400px"}
        fontFamily={"bayon"}
        >
            {text}
        </Text>
    )
}