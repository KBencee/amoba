import { useState } from "react"
import Field from "./components/Field"

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState<"o" | "x">("x")
  const [gameField, setGameField] = useState<string[][]>([
    ['','',''],
    ['','',''],
    ['','','']
  ])

  function setOwner(row:number, col: number){
    let newGameField = [...gameField]
    newGameField[row][col] = currentPlayer
    setCurrentPlayer(prev => prev === "o" ? "x" : "o")
    setGameField(newGameField)
  }

  return (
    <div>
      <section className="gameField">
        {
        gameField.map((row, rowIdx) => {
          return row.map((e, colIdx) => <Field owner={e} row={rowIdx} col={colIdx} setOwner={setOwner}/>)
        })
      }
      </section>

    </div>
  )
}

export default App