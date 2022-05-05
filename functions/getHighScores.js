// require('dotenv').config()

// const Airtable = require('airtable')

// const key = process.env.AIRTABLE_API_KEY
// const baseId = 'appbZwWwGymqsLhvw'
// const tableId = 'Table1'

// Airtable.configure({
//   apiKey: key
// })

// const base = Airtable.base(baseId)
// const table = base.table(tableId)

const { getHighScores } = require('./utils/airtable')

exports.handler = async (event) => {
  try {
    const records = await getHighScores(true)
    return {
      statusCode: 200,
      body: JSON.stringify({
        records
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to query record in Airtable' })
    }
  }
}
