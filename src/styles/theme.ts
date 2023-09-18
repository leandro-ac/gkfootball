import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        yellow : "#DBA73B" ,
        lightblack : "#222121" ,
    },
    styles:{
        global:{
            body:{
                bg : "#DBA73B"
            }
        }
    },
    breakpoints:{
        "2xl" : "2560px",
        "xl" : "1440px",
        "lg" : "1024px",
        "mb" : "768px",
        "sm" : "425px",
        "xs" : "375px",
        "xxs" : "320px",
        "xxxs" : "200px"


    }

})