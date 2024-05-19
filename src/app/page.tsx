import Image from "next/image";
import ClientOnly from "./componentes/ClientOnly";
import Container from "./componentes/Container";
import Card from "./componentes/Card";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        lg:grid-cols-4
        xl:grid-cols-6
        gap-8
        
        ">

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/ouropreto.jpg"
        city="Ouro Preto"
        country="Brasil"
        type="Countryside"
        price="R$ 2000.00" />

       <Card 
        imageSrc="/images/img/ouropreto.jpg"
        city="Cusco"
        country="Peru"
        type="Countryside"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/riodejaneiro.jpg"
        city="Rio de Janeiro"
        country="Brasil"
        type="Beach"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/santiagochile.jpg"
        city="Santiago"
        country="Chile"
        type="Countryside"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/maceio.jpg"
        city="Maceio"
        country="Brasil"
        type="Countryside"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/limaperu.jpg"
        city="Lima"
        country="Peru"
        type="Countryside"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/buenosairesargentina.jpg"
        city="Buenos Aires"
        country="Argentina"
        type="Countryside"
        price="R$ 2000.00" />

        </div>
      </Container>
    </ClientOnly>
  );
}
