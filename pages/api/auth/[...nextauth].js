import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    /*  Providers.Email({
        server: process.env.NEXTAUTH_EMAIL_SERVER,
        from: process.env.NEXTAUTH_EMAIL_FROM,
      }),*/
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
    /*   Providers.Facebook({
         clientId: process.env.NEXTAUTH_FACEBOOK_ID,
         clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET,
       }),*/
    Providers.GitHub({
      clientId: process.env.NEXTAUTH_GITHUB_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET,
    }),
  ],

  database: process.env.NEXTAUTH_DATABASE_URL,

  session: {
    /*    jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,*/
  },

  jwt: {
    /*   secret: '7b06646b67d81168ddd1a6fa82f420a7',
       encryption: true,
       encode: async ({secret, token, maxAge}) => {
       },
       decode: async ({secret, token, maxAge}) => {
       },*/
  },

  callbacks: {
    async signIn(user, account, profile) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {

        return false

      }
    },

    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    }
    ,
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl)
          ? url
          : baseUrl
    }
  },


  pages: {
    //signIn: '/api/auth/signin',
    //signOut: '/api/auth/signout',
    //error: '/api/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/api/auth/verify-request', // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },
  events: {
 /*   async signIn(message) { /!* on successful sign in *!/
    },
    async signOut(message) { /!* on signout *!/
    },
    async createUser(message) { /!* user created *!/
    },
    async linkAccount(message) { /!* account linked to a user *!/
    },
    async session(message) { /!* session is active *!/
    },
    async error(message) { /!* error in authentication flow *!/
    }*/
  },

  // Additional options
  /*secret: '7b06646b67d81168ddd1a6fa82f420a7'*/ // Recommended (but auto-generated if not specified)
  // debug: true, // Use this option to enable debug messages in the console
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth