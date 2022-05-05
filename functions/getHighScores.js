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
  try {
    const records = await table.select({}).firstPage()

    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields
    }))

    return {
      statusCode: 200,
      body: JSON.stringify({
        formattedRecords
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to query record in Airtable' })
    }
  }
}
