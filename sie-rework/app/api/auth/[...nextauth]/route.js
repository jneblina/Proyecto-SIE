
import NextAuth from "next-auth";
import { prisma } from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: {label: "Numero de Control"},
        password: {label: "Password"}
      }, async authorize (credentials, req) {

        const userFound = await prisma.usuarios.findFirst({
          where: {
            estudianteUsuarios: Number(credentials.id)
          }
        })
        
        if (!userFound) throw new Error('No existe esa matricula')
        const validPassword = userFound.passwordUsuarios == credentials.password
        if (!validPassword) throw new Error('Contrasena incorrecta')

        return {
          name : credentials.id,
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  
  pages: {signIn: "/"},
  session: {
    //La sesión caduca en 15 minutos
    maxAge: 60 * 15,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
