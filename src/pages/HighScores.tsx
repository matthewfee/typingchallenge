import { useEffect, useState } from 'react'
import { ScoreLI, ScoresList } from '../styled/HighScores'

const HighScores = () => {
  const [highScores, setHighScores] = useState([])

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch('/.netlify/functions/getHighScores')
        const scores = await res.json()
        console.log(scores)
        setHighScores(scores.records)
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
        {highScores.map((score: scoreType, index: number) => {
          return (
            <ScoreLI key={score.id}>
              {index + 1}. {score.fields.name} - {score.fields.score}
            </ScoreLI>
          )
        })}
      </ScoresList>
    </div>
  )
}

export default HighScores
