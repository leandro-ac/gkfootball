import { TableIndex } from "@/componnets/Table";
import { TitleServices } from "@/componnets/Title";
import { Stack } from "@chakra-ui/react";
import { Navbar } from '@/componnets/Navbar'
import { Footer } from '@/componnets/Footer'

export default function Gerenciamento() {
    return (
    <Stack><Navbar/>  
      
        <Stack py={4} px={4}>
            <Stack py={4} align={"center"}>
            <TitleServices title={"GERENCIAMENTO"} size={"36px"} color={"yellow"}></TitleServices>
            </Stack>
            <TableIndex nome={"LEANDRO ALVARES DE CARVALHO"} email={"leandro@code"} niver={"24/09/2000"} cargo={"Assessor Comercial"} ></TableIndex>
        </Stack>

    <Footer/></Stack>
 )      
}