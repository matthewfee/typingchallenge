import { useEffect, useState } from 'react'
import { ScoreLI, ScoresList } from '../styled/HighScores'

const HighScores = () => {
  const [highScores, setHighScores] = useState([])

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch('/.netlify/functions/getHighScores')
        const scores = await res.json()
        console.log(scores.formattedRecords)
        setHighScores(scores.formattedRecords)
      } catch (error) {
        console.error(error)
      }
    }
    loadHighScores()
  }, [])

  type scoreType = {
    fields: {
      name: string
      score: number
    }
    id: string
  }

  return (
    <div>
      <h2>High Scores</h2>
      <ScoresList>
        {highScores.map((score: scoreType) => {
          return (
            <ScoreLI key={score.id}>
              {score.fields.name} - {score.fields.score}
            </ScoreLI>
          )
        })}
      </ScoresList>
    </div>
  )
}

export default HighScores
