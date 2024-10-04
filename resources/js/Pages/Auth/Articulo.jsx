import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Welcome from "@/Pages/Welcome";

export default function Articulo({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("articulo"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Welcome>
            <Head title="Articulo" />

            <h1>Aca se van a cargar todos los articulos de forma dinamica</h1>
        </Welcome>
    );
}
