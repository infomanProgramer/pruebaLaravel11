//Basic horizontal menu to understanding Tailwind basic concepts.

import { Link, Head } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    children,
}) {
    return (
        <>
            <Head title="Welcome" />
            <div class="flex flex-row max-sm:flex-col bg-red-300 w-full h-20 justify-center items-center gap-x-2 ">
                {/* <div class="flex flex-row justify-center items-center w-48 h-16 rounded-3xl bg-indigo-500 text-center align-middle hover:bg-red-950 hover:text-white max-sm:rounded-none max-sm:w-full">
                    Inicio
                </div> */}
                <Link
                    href={route("login")}
                    className="flex flex-row justify-center items-center w-48 h-16 rounded-3xl bg-indigo-500 text-center align-middle hover:bg-red-950 hover:text-white max-sm:rounded-none max-sm:w-full"
                >
                    Login
                </Link>
                <Link
                    href={route("register")}
                    className="flex flex-row justify-center items-center w-48 h-16 rounded-3xl bg-green-600 text-center hover:bg-red-950 hover:text-white max-sm:rounded-none max-sm:w-full"
                >
                    Registrar
                </Link>
                <Link
                    href={route("portafolio")}
                    className="flex flex-row justify-center items-center w-48 h-16 rounded-3xl bg-yellow-400 text-center hover:bg-red-950 hover:text-white max-sm:rounded-none max-sm:w-full"
                >
                    Portafolio
                </Link>
            </div>
            <div>{children}</div>
        </>
    );
}
