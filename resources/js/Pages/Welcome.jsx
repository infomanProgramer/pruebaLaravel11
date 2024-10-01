import { Link, Head } from "@inertiajs/react";

const people = [
    {
        name: "Calvin Hawkins",
        email: "calvin.hawkins@example.com",
        image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Kristen Ramos",
        email: "kristen.ramos@example.com",
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ted Fox",
        email: "ted.fox@example.com",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                    <img
                        class="size-12"
                        src="/img/logo.svg"
                        alt="ChitChat Logo"
                    />
                </div>
                <div>
                    <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-slate-500">You have a new message!</p>
                </div>
            </div>
            <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                    class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src="/img/erin-lindford.jpg"
                    alt="Woman's Face"
                />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            Erin Lindford
                        </p>
                        <p class="text-slate-500 font-medium">
                            Product Engineer
                        </p>
                    </div>
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                    </button>
                </div>
            </div>
        </>
    );
}
