import {InputHTMLAttributes, useState} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {}

export function Input({type, ...rest}: Props) {
    const [inputType, setInputType] = useState(type || "text");

    function viewChangePassword(){
        if(inputType == "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }

    return (
        <div className="relative">
            <input type={inputType} {...rest}
                   className="text-sm font-normal text-gray-400 bg-gray-100 px-2 rounded-md outline-gray-400 h-10 w-full"/>
            {type == 'password' &&
                <button type="button" className="absolute right-2 top-3 text-xs text-gray-600 font-medium hover:underline" onClick={viewChangePassword}>
                    {inputType == 'password' ? 'Mostrar senha' : 'Esconder senha'}
                </button>
            }
        </div>
    );
}