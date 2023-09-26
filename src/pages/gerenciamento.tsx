import { TableIndex, TableManager } from "@/componnets/Table";
import { TitleServices } from "@/componnets/Title";
import { Stack } from "@chakra-ui/react";
import { Navbar } from '@/componnets/Navbar'
import { Footer } from '@/componnets/Footer'

export default function Gerenciamento() {
    return (
    <Stack><Navbar/>  
      
        <Stack px={4} spacing={0}>
            <Stack align={"center"} py={4}>
            <TitleServices title={"GERENCIAMENTO"} size={"36px"} color={"yellow"}></TitleServices>
            </Stack>
            <TableManager nome={""} email={""} niver={""} cargo={""}></TableManager>
            
        </Stack>

    <Footer/></Stack>
 )      
}