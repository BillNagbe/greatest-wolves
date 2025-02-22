import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
export default function Cards(props: any) {
    

  return (
    <Card className="grid grid-rows-6 grid-cols-6 gap-4 max-h-20 max-w-20">
      <Image 
        src={props.img}
        alt={props.alt}
        width={300}
        height={260}
        className="row-start-1 row-span-4 col-start-1 col-span-4"
      />
      <CardBody className="row-start-1 row-end-7">
        <ul className="flex flex-col gap-1 items-start justify-center py-2 px-1">
          <li>PPG: {props.ppg}</li>
          <li>RPG: {props.rpg}</li>
          <li>Ast: {props.ast}</li>
          <li>AllStar: {props.year}</li>
        </ul>
      </CardBody>
      <CardHeader>
        <h1>{props.name}</h1>
      </CardHeader>
    </Card>
  );
}
