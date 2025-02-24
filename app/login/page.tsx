'use client';
import Buttons from "./componments/Buttons";
import InputField from "./componments/Input";



function LoginPage() {
    return (
        <form action="/app/login/page.tsx" target="_self" className="w-1/2 rounded-lg border-2 border-white">
            <label>
                Name: <InputField type="text" name="user-name" id="user-name" />
            </label>
                {/*  */}
            <label>
                Password: <InputField type="password" name="user-pwd" id="user-pwd" />
            </label>
        </form>
    )
}

export default LoginPage;