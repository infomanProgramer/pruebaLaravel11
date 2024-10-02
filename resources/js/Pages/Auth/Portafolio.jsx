import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Welcome from "@/Pages/Welcome";

export default function Portafolio({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("portafolio"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Welcome>
            <Head title="Portafolio" />

            <h1>Este es mi primer portafolio</h1>
        </Welcome>
    );
}
