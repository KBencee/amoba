const Field = (props: {owner:string, row:number, col:number, setOwner: (row: number, col: number)=>void}) => {
  return (
    <button disabled={props.owner !== ""} onClick={()=>props.setOwner(props.row, props.col)}>
        {props.owner === "o" && 
        <i style={{color: "var(--myorange)"}} className="fa-solid fa-o"></i>}

        {props.owner === "x" && 
        <i style={{color: "var(--myblue)"}} className="fa-solid fa-xmark"></i>}
    </button>
  )
}

export default Field