import { CardLogin } from "@/componnets/Cards";
import { Stack } from "@chakra-ui/react";

export default function login(){
    return(
        <Stack
        as={"main"}
        p={10}
        align={'center'}
        >
            <CardLogin/>
        </Stack>
    )
}