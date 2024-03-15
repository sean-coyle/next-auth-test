# next-auth POC
This is a proof of concept for next auth. This should just be used as refernce but I'll link better resources
I'll update this if I find anything useful or a better way to handle it.

# Key Points
- App needs to be wrapped in a session provider. see root [page.js](https://github.com/sean-coyle/next-auth-test/blob/f5131c588a21ab851bc10cdacabe9ae1d99e96b0/test-auth/src/app/page.js) and [providers.js](https://github.com/sean-coyle/next-auth-test/blob/f5131c588a21ab851bc10cdacabe9ae1d99e96b0/test-auth/src/app/Providers.js)
- When using functions like sign in and signout or other next-auth built in methods you need "use client" at the top of the file
- You can block pages if not logged in using middleware see [middleware.js](https://github.com/sean-coyle/next-auth-test/blob/f5131c588a21ab851bc10cdacabe9ae1d99e96b0/test-auth/middleware.js) or better yet the [next-auth docs for middleware](https://next-auth.js.org/configuration/nextjs#middleware)
- To use any next-auth provider the file must exist at the following route src/app/api/auth/[...nextauth]/route.js

#Useful linkes
## Set up
[next-auth initialization docs](https://next-auth.js.org/configuration/initialization)
## General Guide on everything 
[next-auth getting started guide](https://next-auth.js.org/getting-started/example)
## session provider
[next-auth docs for session provider](https://next-auth.js.org/getting-started/client#sessionprovider)
## middleware
[next-auth docs for middleware](https://next-auth.js.org/configuration/nextjs#middleware)

#Password hashing
I found that [bycrypt](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) would be good for password hashing as well takes care of everything we might need 
