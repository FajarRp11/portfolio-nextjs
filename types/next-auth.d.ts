import { type DefaultSession } from "next-auth";
import { Role } from "../lib/generated/prisma/enums";

declare module "next-auth" {
  interface User {
    role?: Role;
  }

  interface AdapterUser {
    role?: Role;
  }

  interface Session {
    user: {
      role?: Role;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: Role;
  }
}
