import "next-auth";
import "@auth/core/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      customerId?: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: string;
    customerId?: string;
  }
}
