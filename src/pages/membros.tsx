import { TableIndex } from "@/componnets/Table";
import { TitleServices } from "@/componnets/Title";
import { Stack } from "@chakra-ui/react";
import { Navbar } from '@/componnets/Navbar'
import { Footer } from '@/componnets/Footer'

export default function Membros() {
    return (
    <Stack><Navbar/>  
      
        <Stack px={4} spacing={0}>
            <Stack align={"center"} py={4}>
            <TitleServices title={"MEMBROS"} size={"36px"} color={"yellow"}></TitleServices>
            </Stack>
            <TableIndex nome={"LEANDRO ALVARES DE CARVALHO"} email={"leandro@code"} niver={"24/09/2000"} cargo={"Assessor Comercial"} ></TableIndex>
            <TableIndex nome={"LEANDRO ALVARES DE CARVALHO"} email={"leandro@code"} niver={"24/09/2000"} cargo={"Assessor Comercial"} ></TableIndex>
            
        </Stack>

    <Footer/></Stack>
 )      
}