import { auth } from "@/auth";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";
import Secret from "./secret";

export default async function Home() {
    const session = await auth();
    return (
        <div>
            {session ? <LogoutButton /> : <LoginButton />}
            <p>Hello {session?.user?.name || "friend!"}</p>

            {session ? <Secret></Secret> : "Log in to show secrets..."}
        </div>
    );
}
