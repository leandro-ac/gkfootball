import { SectionContatos, SectionContatos2, SectionContatos3 } from "@/componnets/Section";
import { Navbar } from '@/componnets/Navbar'
import { Footer } from '@/componnets/Footer'
import { Stack } from "@chakra-ui/react";

export default function Contato() {
    return (
    <Stack><Navbar/>

        <Stack>
            <SectionContatos />
            <SectionContatos2 />
            <SectionContatos3 />
        </Stack>

    <Footer/></Stack>
    )
}