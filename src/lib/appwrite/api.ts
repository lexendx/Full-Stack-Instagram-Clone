import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config"; // Ensure this is properly imported and initialized

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password
        );
        return newAccount;
    } catch (error) {
        console.error("Error creating user account:", error);
        throw error; // Re-throw error for better upstream handling
    }
}
