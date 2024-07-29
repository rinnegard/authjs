import { signIn } from "@/auth";

export function LoginButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn();
            }}
        >
            <button type="submit" className="bg-slate-500 p-2 rounded-lg">
                Log in
            </button>
        </form>
    );
}
