
import NextAuth from "next-auth";
import { prisma } from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        correo: {label: "Correo"},
        password: {label: "Password"}
      }, async authorize (credentials, req) {

        const userFound = await prisma.usuarios.findUnique({
          where: {
            correoUsuarios : credentials.correo
          }
        })
        if (!userFound) throw new Error('No existe esa matricula')

        const passwordValida = userFound.passwordUsuarios == credentials.password
        if (!passwordValida) throw new Error('Contrasena incorrecta')

        return {
          id : userFound.idEstudiante,
          email: userFound.correoUsuarios
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
