//Basic horizontal menu to understanding Tailwind basic concepts.

import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
            <div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                        <div class="md:shrink-0">
                            <img
                                class="h-48 w-full object-cover md:h-full md:w-48"
                                src="/img/building.jpg"
                                alt="Modern building architecture"
                            />
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                Company retreats
                            </div>
                            <a
                                href="#"
                                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                            >
                                Incredible accommodation for your team
                            </a>
                            <p class="mt-2 text-slate-500">
                                Looking to take your team away on a retreat to
                                enjoy awesome food and take in some sunshine? We
                                have a list of places to do just that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
