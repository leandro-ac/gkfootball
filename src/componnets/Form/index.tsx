import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

interface InputIndexProps{
    label:string
    type:string 
    w: string
    placeholder:string
    color:string
}

export function InputIndex({label, type, w, placeholder, color}:InputIndexProps){
    return(
        <FormControl
        w={w}
        color={color}
        >
            <FormLabel>{label}</FormLabel>
            <Input type={type} placeholder={placeholder} bg={"white"} color={"black"}/>
        </FormControl>
    )
}