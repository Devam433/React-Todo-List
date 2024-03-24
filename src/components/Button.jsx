export function Button(prop){

    return(
        <button 
        className="btn"
        onClick={()=>{prop.handleOnlick(prop.id)}}
        >
        {prop.value}
        </button>
    )
}