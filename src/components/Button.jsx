export function Button(prop){
    console.log(prop)
    return(
        <button 
            className="btn"
            onClick={()=>{
                typeof prop.checkIsEmpty === 'function' ? prop.checkIsEmpty() : null;
                if(prop.isChecked){
                    typeof prop.handleOnlick === 'function' ? prop.handleOnlick(prop.id) : null;
                }
            }}
        >
        {prop.value}
        </button>   
    )
}