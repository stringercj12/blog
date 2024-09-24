import {useState} from "react";
import {SquaresFour, List} from "@phosphor-icons/react";


export function Posts() {
    const [viewType, setViewType] = useState('grid');
    return (
        <div className="container mx-auto my-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-medium text-gray-700 mb-2">Postagens</h1>
                <div className="flex items-center gap-4">
                    <button type="button" className="hover:bg-gray-300 px-1.5 py-1.5 rounded-lg" onClick={() => setViewType(viewType == 'grid' ? 'list' : 'grid')}>
                        {viewType == 'grid' ? <SquaresFour  size={28}/> :
                            <List size={28}/>}
                    </button>
                    <a href="#"
                       className="text-gray-500 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium pb-2 hover:bg-gray-300 hover:text-gray-700">
                        Criar posts
                    </a>
                </div>
            </div>


            <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3, 4, 5, 6].map((post: number) => (
                    <div
                        key={post}
                        className="bg-gray-300 p-2 rounded-lg text-gray-700 grid grid-cols-[60px_1fr] gap-4 items-center cursor-pointer hover:shadow hover:shadow-gray-400">
                        <div className="bg-red-300 w-16 h-16 rounded">

                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Titulo</h2>
                            <p className="text-sm font-normal line-clamp-4">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum saepe, vitae. Libero, qui
                                sunt!
                                A at autem consequuntur dolor eaque magni natus non possimus provident quia repellendus
                                saepe, suscipit, voluptatum.</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}