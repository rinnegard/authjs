import { auth } from "@/auth";
import SessionTest from "./sesion-test";
import { Suspense } from "react";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

export default async function Home() {
    const session = await auth();
    return (
        <div>
            {session ? <LogoutButton /> : <LoginButton />}
            <p>hello {session?.user?.name}</p>
            <p>email: {session?.user?.email}</p>
            <p>image: {session?.user?.image}</p>
            <p>id: {session?.user?.id}</p>
            <Suspense fallback={"Loading..."}>
                <SessionTest></SessionTest>
            </Suspense>
            {session && <p>Secret</p>}
        </div>
    );
}
