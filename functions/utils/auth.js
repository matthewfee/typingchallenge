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

module.exports = {
  getAccessTokenFromHeaders
}
