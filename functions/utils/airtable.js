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

const getHighScores = async (filterEmptyRecords) => {
  const queryOptions = {
    sort: [{ field: 'score', direction: 'desc' }]
  }
  if (filterEmptyRecords) {
    queryOptions.filterByFormula = `AND(name != "", score > 0)`
  }
  const records = await table.select(queryOptions).firstPage()
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields
  }))
  return formattedRecords
}

module.exports = {
  table,
  getHighScores
}
