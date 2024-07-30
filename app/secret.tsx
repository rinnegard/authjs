"use client";
import { useSession } from "next-auth/react";

export default function Secret() {
    const session = useSession();

    return (
        <div>
            <h1>SECRET INFO</h1>
            <p>{session.status}</p>
            <p>email: {session.data?.user?.email}</p>
            <p>image: {session.data?.user?.image}</p>
            <p>id: {session.data?.user?.id}</p>
            <p>role: {session.data?.user?.role}</p>
            {session.data?.user?.role === "admin" && "You have admin powers!"}
        </div>
    );
}
