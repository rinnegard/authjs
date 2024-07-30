import { Role } from "@prisma/client";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        role: Role;
    }
}

declare module "@auth/core/adapters" {
    interface AdapterUser {
        role: Role;
    }
}

// declare module "next-auth/jwt" {
//     interface JWT {
//         role: Role;
//     }
// }
