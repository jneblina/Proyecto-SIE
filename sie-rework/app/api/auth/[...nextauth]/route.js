import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
<<<<<<< HEAD
import GoogleProvider from "next-auth/providers/google";
=======



>>>>>>> 1251720727724f6c6289a9949bb5d0d70398c217

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        return await signInWithEmailAndPassword(
          auth,
          credentials.email || "",
          credentials.password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
    GitHubProvider({
<<<<<<< HEAD
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
=======
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    })
>>>>>>> 1251720727724f6c6289a9949bb5d0d70398c217
  ],
});

export { handler as GET, handler as POST };
