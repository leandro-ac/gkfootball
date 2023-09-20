import { CardServices } from "@/componnets/Cards";
import { SectionIndex, SectionIndex2} from "@/componnets/Section";
import { TitleServices } from "@/componnets/Title";
import { Center, HStack, Stack } from "@chakra-ui/react";


export default function Home() {
  return (

    <Stack
      as={"main"}
      spacing={0} 
    >
      
      <SectionIndex/>
      <SectionIndex2/>

      <Stack
        px={20}
        py={24}
        spacing={16}
      >
        <Stack  
          align={"Center"}
        >
        <TitleServices title={"AS MAIS VENDIDAS:"} size={"48"} color={"#DBA73B"}></TitleServices>
        </Stack>
        

        <HStack
        spacing={16}
        >
        <CardServices src1={"/imagens/VASCO_BRANCO.jpg"} alt1={"Vasco Branco"} width1={400} height1={800} title={"VASCO DA GAMA BRANCA"} text={"R$:99,99"} size={"24"} />  
        <CardServices src1={"/imagens/VASCO_TREINO.jpg"} alt1={"Vasco Treino"} width1={400} height1={800} title={"VASCO DA GAMA TREINO"} text={"R$:99,99"} size={"24"} />
        <CardServices src1={"/imagens/VASCO_PRETO.jpg"} alt1={"Vasco Preto"} width1={400} height1={800} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={"24"} />
        </HStack> 

        <Stack  
        align={"Center"}
        >
        <TitleServices title={"BRASILEIRÃO:"} size={"36"} color={"#FFFF"}></TitleServices>
        </Stack>
        <HStack
        spacing={12}
        >
        <CardServices src1={"/imagens/INTER.jpg"} alt1={"Internacional"} width1={400} height1={800} title={"INTERNACIONAL"} text={"R$:99,99"} size={"16"} />
        <CardServices src1={"/imagens/FORTALEZA.jpg"} alt1={"FORTALEZA"} width1={400} height1={800} title={"FORTALEZA"} text={"R$:99,99"} size={"16"} />  
        <CardServices src1={"/imagens/SPO.jpg"} alt1={"SÃO PAULO"} width1={400} height1={800} title={"SÃO PAULO"} text={"R$:99,99"} size={"16"} />
        <CardServices src1={"/imagens/CUIABA.jpg"} alt1={"CUIABÁ"} width1={400} height1={800} title={"CUIABÁ"} text={"R$:99,99"} size={"16"} />
        <CardServices src1={"/imagens/SANTOS.jpg"} alt1={"SANTOS"} width1={400} height1={800} title={"SANTOS"} text={"R$:99,99"} size={"16"} />  
        </HStack>

        <Stack  
        align={"Center"}
        >
        <TitleServices title={"EUROPEUS:"} size={"36"} color={"#FFFF"}></TitleServices>
        </Stack>
        <HStack
        spacing={12}
        >
          <CardServices src1={"/imagens/BAYERN.jpg"} alt1={"BAYERN"} width1={400} height1={800} title={"BAYERN DE MUNIQUE"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/UNITED.jpg"} alt1={"UNITED"} width1={400} height1={800} title={"MANCHESTER UNITED"} text={"R$:99,99"} size={"16"} />  
          <CardServices src1={"/imagens/REAL.jpg"} alt1={"REAL"} width1={400} height1={800} title={"REAL MADRID"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/JUVE.jpg"} alt1={"JUVE"} width1={400} height1={800} title={"JUVENTUS"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/BARCA.jpg"} alt1={"BARCA"} width1={400} height1={800} title={"BARCELONA"} text={"R$:99,99"} size={"16"} />  
          </HStack>

          <Stack  
          align={"Center"}
          >
          <TitleServices title={"SELEÇÕES:"} size={"36"} color={"#FFFF"}></TitleServices>
          </Stack>
          <HStack
          spacing={12}
          >
          <CardServices src1={"/imagens/BRASIL.jpg"} alt1={"BRASIL"} width1={400} height1={800} title={"BRASIL"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/HOLANDA.jpg"} alt1={"HOLANDA"} width1={400} height1={800} title={"HOLANDA"} text={"R$:99,99"} size={"16"} />  
          <CardServices src1={"/imagens/ESPANHA.jpg"} alt1={"ESPANHA"} width1={400} height1={800} title={"ESPANHA"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/IRA.jpg"} alt1={"IRA"} width1={400} height1={800} title={"IRÃ"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/ARGENTINA.jpg"} alt1={"ARGENTINA"} width1={400} height1={800} title={"ARGENTINA"} text={"R$:99,99"} size={"16"} />  
        </HStack>

          <Stack  
          align={"Center"}
          >
          <TitleServices title={"OUTROS:"} size={"36"} color={"#FFFF"}></TitleServices>
          </Stack>
          <HStack
          spacing={12}
          >
          <CardServices src1={"/imagens/BOCA.jpg"} alt1={"boca"} width1={400} height1={800} title={"BOCA JUNIOR"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/PAYSANDU.jpg"} alt1={"paysandu"} width1={400} height1={800} title={"PAYSANDU"} text={"R$:99,99"} size={"16"} />  
          <CardServices src1={"/imagens/LDU.jpg"} alt1={"LDU"} width1={400} height1={800} title={"LDU"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/RIVER.jpg"} alt1={"RIVER"} width1={400} height1={800} title={"RIVER PLATE"} text={"R$:99,99"} size={"16"} />
          <CardServices src1={"/imagens/AMERICA.jpg"} alt1={"AMÉRICA"} width1={400} height1={800} title={"AMÉRICA-MEX"} text={"R$:99,99"} size={"16"} />
          </HStack>
      </Stack>
    </Stack>
  )
}