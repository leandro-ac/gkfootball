import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

interface InputIndexProps{
    label:string
    type:string 
}

export function InputIndex({label, type}:InputIndexProps){
    return(
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input type={type}/>
        </FormControl>
    )
}