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
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            <TableIndex nome={""} email={""} niver={""} cargo={""} ></TableIndex>
            
        </Stack>

    <Footer/></Stack>
 )      
}