import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

export function Login() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <form className="w-96 mx-auto bg-white shadow-md px-5 py-8 rounded-lg">
                <img src="/vite.svg" alt="Logo do blog" className="mx-auto mb-8 mt-4"/>
                <div className="flex flex-col mb-3">
                    <label htmlFor="email" className="font-medium text-sm text-gray-600 mb-1">E-mail</label>
                    <Input type="email" id="email" name="email" placeholder="E-mail" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="password" className="font-medium text-sm text-gray-600 mb-1">Senha</label>
                    <Input type="password" id="password" name="password" placeholder="Senha" />
                </div>

                <div className="flex items-center justify-center mt-5">
                    <Button type="submit" label="Acessar" />
                </div>
            </form>
        </div>
    );
}