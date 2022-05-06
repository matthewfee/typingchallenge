const jwt = require('jsonwebtoken')
const jwks = require('jwks-rsa')
const jwksClient = jwks({
  jwksUri: 'https://dev-j89-uh0s.us.auth0.com/.well-known/jwks.json',
  audience: 'https://typechallengeapi'
})

const { promisify } = require('util')

const getAccessTokenFromHeaders = (headers) => {
  const rawAuth = headers.authorization
  if (!rawAuth) {
    return null
  }

  const authParts = rawAuth.split(' ')
  if (authParts[0] !== 'Bearer' || authParts.length !== 2) {
    return null
  }

  const accessToken = authParts[1]
  return accessToken
}

const validateAccessToken = async (token) => {
  try {
    const decodedToken = jwt.decode(token, { complete: true })
    const kid = decodedToken.header.kid
    const alg = decodedToken.header.alg
    const getSigningKey = promisify(jwksClient.getSigningKey)
    const key = await getSigningKey(kid)
    const signingKey = key.publicKey

    const options = { algorithms: alg }
    jwt.verify(token, signingKey, options)
    return decodedToken.payload
  } catch (error) {
    console.error(error)
    return null
  }
}

module.exports = {
  getAccessTokenFromHeaders,
  validateAccessToken
}
