import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":"/","callback":"/dashboard"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/login","method":"post","propertyName":"meta.token"},"logout":false,"user":{"url":"/user","method":"post","propertyName":"data"}},"_name":"local"}))

  // facebook
  $auth.registerStrategy('facebook', new scheme_23514a38($auth, {"client_id":"872294982929508","userinfo_endpoint":false,"scope":["public_profile","email"],"redirect_uri":"http://localhost:3000/","_name":"facebook","authorization_endpoint":"https://facebook.com/v2.12/dialog/oauth"}))

  // google
  $auth.registerStrategy('google', new scheme_23514a38($auth, {"client_id":"1038999090260-j6vqc9ocqqelsaop901obbcdfd7n4h6q.apps.googleusercontent.com","_name":"google","authorization_endpoint":"https://accounts.google.com/o/oauth2/auth","userinfo_endpoint":"https://www.googleapis.com/oauth2/v3/userinfo","scope":["openid","profile","email"]}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
