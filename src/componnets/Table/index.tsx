import { Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface TableIndexProps {
    nome: string
    email: string
    niver: string
    cargo: string
}

export function TableIndex({ nome, email, niver, cargo }: TableIndexProps) {
    return (
        <Stack>
            <TableContainer>
                <Table variant='simple'>
                    <Thead
                        bg={"yellow"}
                    >
                        <Tr
                        >
                            <Th border={"1px solid #000"}>Nome:</Th>
                            <Th border={"1px solid #000"}>E-mail:</Th>
                            <Th border={"1px solid #000"}>Aniversário:</Th>
                            <Th border={"1px solid #000"}>Cargo:</Th>
                        </Tr>
                    </Thead>
                    <Tbody
                        bg={"white"}
                    >
                        <Tr>
                            <Td border={"1px solid #000"}>{nome}</Td>
                            <Td border={"1px solid #000"}>{email}</Td>
                            <Td border={"1px solid #000"}>{niver}</Td>
                            <Td border={"1px solid #000"}>{cargo}</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer>
        </Stack>
    )
}
interface TableManagerProps {
    nome: string
    email: string
    niver: string
    cargo: string
}

export function TableManager({ nome, email, niver, cargo }: TableManagerProps) {
    return (
        <Stack align={"center"}>
            <Stack w={"80%"}  >
                <TableContainer>
                    <Table variant='simple'>
                        <Thead
                            bg={"yellow"}
                        >
                            <Tr

                            >
                                <Th border={"1px solid #000"}>Nome</Th>
                                <Th border={"1px solid #000"}>E-mail</Th>
                                <Th border={"1px solid #000"}>Aniversário</Th>
                                <Th border={"1px solid #000"}>Cargo</Th>
                            </Tr>
                        </Thead>
                        <Tbody
                            bg={"white"}
                        >
                            <Tr >
                                <Td border={"1px solid #000"}>{nome}</Td>
                                <Td border={"1px solid #000"}>{email}</Td>
                                <Td border={"1px solid #000"}>{niver}</Td>
                                <Td border={"1px solid #000"}>{cargo}</Td>
                            </Tr>
                            <Tr>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack>
    )
}
