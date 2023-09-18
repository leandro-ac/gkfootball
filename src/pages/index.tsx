import { CardServices } from "@/componnets/Cards";
import { TitleServices } from "@/componnets/Title";
import { Center, HStack, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
    px={208}
    py={80}
    spacing={16}
    >
      <Stack  
      align={"Center"}
      >
      <TitleServices title={"MAIS VENDIDOS"} size={"48"}></TitleServices>
      </Stack>
      
      <HStack
      spacing={32}
      >
      <CardServices src1={"/imagens/VASCO_PRETO.jpg"} alt1={"Vasco Preto"} width1={200} height1={400} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={"16"} />
      <CardServices src1={"/imagens/VASCO_BRANCO.jpg"} alt1={"Vasco Branco"} width1={200} height1={400} title={"VASCO DA GAMA BRANCA"} text={"R$:99,99"} size={"16"} />  
      <CardServices src1={"/imagens/VASCO_TREINO.jpg"} alt1={"Vasco Treino"} width1={200} height1={400} title={"VASCO DA GAMA TRREINO"} text={"R$:99,99"} size={"16"} />
      </HStack> 

      <Stack  
      align={"Center"}
      >
      <TitleServices title={"BRASILEIRÃO"} size={"36"}></TitleServices>
      </Stack>
      <HStack
      spacing={12}
      >
      <CardServices src1={"/imagens/INTER.jpg"} alt1={"Internacional"} width1={120} height1={240} title={"INTERNACIONAL"} text={"R$:99,99"} size={"12"} />
      <CardServices src1={"/imagens/FORTALEZA.jpg"} alt1={"FORTALEZA"} width1={120} height1={240} title={"FORTALEZA"} text={"R$:99,99"} size={"12"} />  
      <CardServices src1={"/imagens/SPO.jpg"} alt1={"SÃO PAULO"} width1={120} height1={240} title={"SÃO PAULO"} text={"R$:99,99"} size={"12"} />
      <CardServices src1={"/imagens/CUIABA.jpg"} alt1={"CUIABÁ"} width1={120} height1={240} title={"CUIABÁ"} text={"R$:99,99"} size={"12"} />
      <CardServices src1={"/imagens/SANTOS.jpg"} alt1={"SANTOS"} width1={120} height1={240} title={"SANTOS"} text={"R$:99,99"} size={"12"} />  
      </HStack>

      <Stack  
      align={"Center"}
      >
      <TitleServices title={"EUROPEUS"} size={"36"}></TitleServices>
      </Stack>
      <HStack
      spacing={12}
      >
      <CardServices src1={"/imagens/BAYERN.jpg"} alt1={"BAYERN"} width1={120} height1={240} title={"BAYERN DE MUNIQUE"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/UNITED.jpg"} alt1={"UNITED"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      <CardServices src1={"/imagens/REAL.jpg"} alt1={"REAL"} width1={120} height1={240} title={"VASCO DA GAMA TRREINO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/JUVE.jpg"} alt1={"JUVE"} width1={120} height1={240} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/BARCA.jpg"} alt1={"BARCA"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      </HStack>

      <Stack  
      align={"Center"}
      >
      <TitleServices title={"SELEÇÕES"} size={"36"}></TitleServices>
      </Stack>
      <HStack
      spacing={12}
      >
      <CardServices src1={"/imagens/ALL.jpg"} alt1={"Vasco Preto"} width1={120} height1={240} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/MIAMI.jpg"} alt1={"Vasco Branco"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      <CardServices src1={"/imagens/LDU.jpg"} alt1={"Vasco Treino"} width1={120} height1={240} title={"VASCO DA GAMA TRREINO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/RIVER.jpg"} alt1={"Vasco Preto"} width1={120} height1={240} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/AMERICA.jpg"} alt1={"Vasco Branco"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      </HStack>

      <Stack  
      align={"Center"}
      >
      <TitleServices title={"OUTROS"} size={"36"}></TitleServices>
      </Stack>
      <HStack
      spacing={12}
      >
      <CardServices src1={"/imagens/BRASIL.jpg"} alt1={"Vasco Preto"} width1={120} height1={240} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/HOLANDA.jpg"} alt1={"Vasco Branco"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      <CardServices src1={"/imagens/ESPANHA.jpg"} alt1={"Vasco Treino"} width1={120} height1={240} title={"VASCO DA GAMA TRREINO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/IRA.jpg"} alt1={"Vasco Preto"} width1={120} height1={240} title={"VASCO DA GAMA PRETO"} text={"R$:99,99"} size={""} />
      <CardServices src1={"/imagens/ARGENTINA.jpg"} alt1={"Vasco Branco"} width1={120} height1={240} title={"VASCO DA GAMA Branca"} text={"R$:99,99"} size={""} />  
      </HStack>
    </Stack>
  )
}
