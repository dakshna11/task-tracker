import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export async function getCurrentUser() {
    const session = await getServerSession(authOptions);

    if(!session?.user) {
        throw new Error("No user found");
    }
    return session?.user;
}