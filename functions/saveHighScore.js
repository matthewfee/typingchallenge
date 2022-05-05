const { table, getHighScores } = require('./utils/airtable')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        error: 'That method is not allowed'
      })
    }
  }

  const { score, name } = JSON.parse(event.body)

  if (typeof score === 'undefined' || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad request' })
    }
  }

  try {
    const records = await getHighScores(false)

    const lowestRecord = records[9]

    if (score > lowestRecord.fields.score) {
      const updatedRecord = {
        id: lowestRecord.id,
        fields: { name, score }
      }
      await table.update([updatedRecord])
      return {
        statusCode: 200,
        body: JSON.stringify(updatedRecord)
      }
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({})
      }
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: 'Failed to save score in Airtable'
      })
    }
  }
}
