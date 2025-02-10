import { Client, Account } from "appwrite";

export const config = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECTID,
  // dbId: import.meta.env.VITE_APPWRITE_DBID,
  // usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION,
};

const client = new Client();

client.setProject(config.projectId).setEndpoint(config.endpoint);

const account = new Account(client);

// export const createUser = async (email, password, username) => {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username
//     );

//     if (!newAccount) throw new Error();

//     const avatarUrl = avatars.getInitials(username);

//     await signIn(email, password);

//     const newUser = await db.createDocument(
//       config.dbId,
//       config.usersCollectionId,
//       ID.unique(),
//       {
//         accountID: newAccount.$id,
//         email,
//         username,
//         avatar: avatarUrl,
//       }
//     );

//     return newUser;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// };

// export const signIn = async (email, password) => {
//   try {
//     const session = account.createEmailPasswordSession(email, password);

//     return session;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export { account };
