require('dotenv').config()

const Airtable = require('airtable')

const key = process.env.AIRTABLE_API_KEY
const baseId = 'appbZwWwGymqsLhvw'
const tableId = 'Table1'

Airtable.configure({
  apiKey: key
})

const base = Airtable.base(baseId)
const table = base.table(tableId)

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

  if (!score || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad request' })
    }
  }

  try {
    const records = await table
      .select({
        sort: [{ field: 'score', direction: 'desc' }]
      })
      .firstPage()

    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields
    }))

    // formatted records in order of score highest to lowest

    const lowestRecord = formattedRecords[9]

    if (
      typeof lowestRecord.fields.score === 'undefined' ||
      score > lowestRecord.fields.score
    ) {
      const updatedRecord = { id: lowestRecord.id, fields: { name, score } }
      await table.update([updatedRecord])
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        updatedRecord
      })
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({})
    }
  }
}
