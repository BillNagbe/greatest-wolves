'use client';
import { useState } from "react";
import LoginPage from "./login/page";
import InputField from "./login/componments/Input";
export default function Cards(props: any) {
    
    const [user] = useState({
      name: "Bill Nagbe",
      password: "1234"
    })

    while(user.name != InputField.name)  {
      return <LoginPage />
    }

}
