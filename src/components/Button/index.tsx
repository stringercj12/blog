import {ButtonHTMLAttributes} from "react";


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}

export function Button({label, ...rest}: Props) {
    return (
        <button {...rest}
                className="flex items-center justify-center gap-1.5 px-4 min-w-5 py-2 flex-wrap rounded-md shadow-sm text-sm font-medium text-gray-100 bg-gray-700">
            {label}
        </button>
    )
}