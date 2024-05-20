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
        imageSrc="/images/img/ouropreto.jpg"
        city="Cusco"
        country="Peru"
        type="Countryside"
        price="R$ 2000.00" />

       <Card 
        imageSrc="/images/img/ouropreto.jpg"
        city="Cusco"
        country="Peru"
        type="Countryside"
        price="R$ 2000.00" />

        <Card 
        imageSrc="https://github.com/vivski/airbnbproject/blob/master/public/images/img/limaperu.jpg?raw=true"
        city="Lima"
        country="Peru"
        type="Countryside"
        price="R$ 2000.00" />


        </div>
      </Container>
    </ClientOnly>
  );
}
