import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function getGoodleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientId.length) {
    throw Error("Google client id missing");
  }

  if (!clientSecret || !clientSecret.length) {
    throw Error("Client secret missing");
  }

  return {
    clientId,
    clientSecret,
  };
}
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: `/login`,
  },
  providers: [
    GoogleProvider({
      clientId: getGoodleCredentials().clientId,
      clientSecret: getGoodleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async jwt({token, user}){
        
    }
  }
};
