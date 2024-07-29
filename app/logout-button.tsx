import { signOut } from "@/auth";

export function LogoutButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit" className="bg-slate-500 p-2 rounded-lg">
                Log out
            </button>
        </form>
    );
}
