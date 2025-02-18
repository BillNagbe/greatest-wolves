import Image from "next/image";

export default function Home() {
      const AntEdwards = {
        first_name: "Anthony",
        last_name: "Edwards",
        jerseyNum: "5",
        ppg: "27.5",
        reb: "5.8",
        ast: "4.5",
        img: "/slam-cover.webp",
      }


  return (
    <div className="h-fit w-80 border-2 border-black p-3">
        <div className="border border-black grid grid-cols-3 grid-rows-2">
          <div className="col-start-1 col-end-3 row-start-1 row-end-2">
            <Image
              src={AntEdwards.img}
              alt="Slam cover of Edwards dunking"
              width={1483} 
              height={2048}           
            />
          </div>


          <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-black"> 
              
          </div>

          <div className="col-start-1 col-end-4 row-start-2 row-end-3 bg-black">
            <h3 className="text-white">{AntEdwards.first_name + " " + AntEdwards.last_name}</h3>
          </div>
        </div>
    </div>
  );
}
