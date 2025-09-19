import { useEffect, useState } from "react"
import Field from "./components/Field"

const App = () => {
  const [winner, setWinner] = useState<"o"|"x"|"draw"|undefined>()
  const [currentPlayer, setCurrentPlayer] = useState<"o" | "x">("x")
  const [gameField, setGameField] = useState<string[][]>([
    ['','',''],
    ['','',''],
    ['','','']
  ])

  function setOwner(row:number, col: number){
    if(winner != undefined) return

    let newGameField = [...gameField]
    newGameField[row][col] = currentPlayer
    setCurrentPlayer(prev => prev === "o" ? "x" : "o")
    setGameField(newGameField)
  }

  const runTest = () => {
      // vízszintes
      gameField.forEach(row =>{
          if(row[0] != '' && 
            row[0] == row[1] &&
            row[1] == row[2]
          ){
            setWinner(row[0] as 'x'|'o')
            return
          }
        })
      //függőleges
      for(let col = 0; col < gameField[0].length; col++){
        if(gameField[0][col] !== '' &&
          gameField[1][col] === gameField[0][col] &&
          gameField[2][col] === gameField[1][col]
        ){
          setWinner(gameField[0][col] as 'x'|'o')
          return
        }
      }
      //átlós
      if(gameField[0][0] != ''&&
        gameField[1][1] === gameField[0][0] &&
        gameField[2][2] === gameField[1][1]
      ){
        setWinner(gameField[0][0]  as 'x'|'o')
        return
      }

      if(gameField[0][2] != ''&&
        gameField[1][1] === gameField[0][2] &&
        gameField[2][0] === gameField[1][1]
      ){
        setWinner(gameField[0][2]  as 'x'|'o')
        return
      }

      for(let i=0; i< gameField.length; i++){
        for (let j = 0; j < gameField[0].length; j++) {
          if(gameField[i][j] == ''){
            return
          }
          
        }
      }
      setWinner("draw")
  }

  useEffect(runTest,[gameField])
  
  const restart = () => {
    setWinner(undefined)
    setGameField([
      ['','',''],
      ['','',''],
      ['','','']
    ])
  }

  return (
    <div>
      {
        winner && <h1 onClick={restart} className={winner}>{winner != "draw" ? winner + " WIN!" : winner}</h1>
      }

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