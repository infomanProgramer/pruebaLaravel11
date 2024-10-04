//Basic horizontal menu to understanding Tailwind basic concepts.

import { Link, Head } from "@inertiajs/react";

const menuArray = [
    {
        id: 1,
        descripcion: "Inicio",
        url: "inicio",
    },
    {
        id: 2,
        descripcion: "Docker",
        url: "articulo",
    },
    {
        id: 3,
        descripcion: "CSS",
        url: "articulo",
    },
    {
        id: 4,
        descripcion: "PHP",
        url: "articulo",
    },
];
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    children,
}) {
    return (
        <>
            <Head title="Welcome" />
            {/* <div class="flex flex-row max-sm:flex-col bg-red-300 w-full h-20 justify-center items-center gap-x-2 "> */}
            <nav class="flex flex-row bg-stone-800 w-full h-24 justify-center">
                <div class="flex flex-row w-4/5 h-full justify-start items-center gap-x-2">
                    {menuArray.map((item) => (
                        <Link
                            key={item.id}
                            href={route(item.url)}
                            className="flex flex-row justify-center items-center w-48 h-16 rounded-3xl text-white text-center align-middle hover:text-port-green max-sm:rounded-none max-sm:w-full text-xl font-semibold"
                        >
                            {item.descripcion}
                        </Link>
                    ))}
                </div>
            </nav>
            <div>{children}</div>
        </>
    );
}
