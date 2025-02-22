import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
export default function Home(props: any) {
    

  return (
    <Card>
      <Image 
        src={props.img}
        alt={props.alt}
        width={600}
        height={560}
      />
    </Card>
  );
}
