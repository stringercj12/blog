import {Calendar} from '@phosphor-icons/react';

export function NewPost(){
    return (
        <div className="container mx-auto my-10">
            Página do formulário de novo post

            <div className="grid grid-cols-[22.5%_52.5%_22.5%] place-items-center gap-2 items-start">
                <div className="bg-red-200 w-full p-2 rounded">
                   <div className="span mb-2 font-medium text-gray-700">
                       Caixa de seleções
                   </div>

                    <div className="flex flex-wrap gap-2.5 items-center justify-between">
                        {[0,1,2,3,4].map(item => (
                            <div key={item} className="bg-gray-200 rounded flex flex-col items-center justify-center p-2 cursor-grab hover:shadow-lg">
                                <Calendar size={28}/>
                                <span className="text-sm font-semibold select-none">Calendar</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-emerald-200 w-full p-2 rounded">
                    Editor
                </div>

                <div className="bg-purple-200 w-full p-2 rounded">
                    Outro
                </div>

            </div>
        </div>
    );
}