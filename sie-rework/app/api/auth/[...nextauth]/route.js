import NextAuth from "next-auth";
import { prisma } from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "Numero de Control" },
        password: { label: "Password" },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.usuarios.findFirst({
          where: {
            estudianteUsuarios: Number(credentials.id),
          },
          include: {
            estudiante: {
              select: {
                nombre: true,
                correoInstitucional: true,
              },
            },
          },
        });

        if (!userFound) throw new Error("No existe esa matricula");
        const validPassword =
          userFound.passwordUsuarios == credentials.password;
        if (!validPassword) throw new Error("Contrasena incorrecta");

        const user = {
          name: credentials.id,
          email: {
            email: userFound.estudiante.correoInstitucional,
            fullName: userFound.estudiante.nombre,
          },
        };

        return user;
      },
    }),
  ],

  pages: { signIn: "/" },
  session: {
    //La sesión caduca en 15 minutos
    maxAge: 60 * 15,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };