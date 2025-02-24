'use client';
import Buttons from "./componments/Buttons";
import InputField from "./componments/Input";



function LoginPage() {
   
    return (
        <form action="/app/login/page.tsx" target="_self" className="flex flex-col  justify-center gap-4 rounded-lg border-2 p-6">
            <label>
                Name: <InputField type="text" name="user-name" id="user-name" className="border" />
            </label>
    
                {/*  */}
            <label>
                Password: <InputField type="password" name="user-pwd" id="user-pwd" />
            </label>
            <Buttons name="LogIn" />
        </form>
    )
}

export default LoginPage;