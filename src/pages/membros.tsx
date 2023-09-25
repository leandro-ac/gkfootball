import { TableIndex } from "@/componnets/Table";
import { TitleServices } from "@/componnets/Title";
import { Stack } from "@chakra-ui/react";

export default function Table() {
    return (

    <Stack py={4} px={4}>
        <Stack py={4} align={"center"}>
        <TitleServices title={"MEMBROS"} size={"36px"} color={"yellow"}></TitleServices>
        </Stack>
        <TableIndex nome={"LEANDRO ALVARES DE CARVALHO"} email={"leandro@code"} niver={"24/09/2000"} cargo={"Assessor Comercial"}></TableIndex>
    </Stack>
 )      
}