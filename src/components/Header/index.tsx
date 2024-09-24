export function Header() {
    const menu = [
        {
            id: 1,
            path: '',
            text: 'Home',
            isActive: false
        },
        {
            id: 2,
            path: '',
            text: 'Novo Post',
            isActive: true
        },
        {
            id: 3,
            path: '',
            text: 'Meus posts',
            isActive: false
        }
    ];


    return (
        <header
            className="flex items-center justify-between px-20 h-24 shadow-md shadow-gray-200 border-b border-b-gray-100">
            <div className="container flex items-center justify-between mx-auto">
                <div>
                    <img src="./vite.svg" alt="Logo do blog"/>
                </div>
                <nav>
                    <ul className="flex items-center justify-between gap-6">
                        {menu.map(item => (
                            <li className={"relative cursor-pointer group flex items-center justify-center " + (item.isActive ? 'active' : '')}
                                key={item.id}>
                        <span
                            className="text-sm font-semibold text-gray-400 hover:text-gray-700 group-[.active]:text-gray-700">
                            {item.text}
                        </span>
                                <span
                                    className="absolute -bottom-2 left-0 right-0 mx-auto h-1 w-full bg-gray-700 rounded hidden transition-all group-hover:flex group-[.active]:flex"></span>
                            </li>
                        ))}
                        <li>
                            <div
                                className="flex items-center justify-center w-10 h-10 bg-gray-600 text-gray-100 rounded-full shadow-2xl hover:shadow-gray-700 cursor-pointer">
                            <span className="font-semibold">
                                JF
                            </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}