export function Button(prop){
    console.log('Button Rerendered')
    function handleButtonClick() {
        typeof prop.checkIsEmpty === 'function' ? prop.checkIsEmpty() : null;
        if(prop.isChecked){
            typeof prop.handleOnlick === 'function' ? prop.handleOnlick(prop.id) : null;
        }
        if(prop.isEdit) {
            prop.SeteditOrSaveBtnValue(prev=>!prev);
            prop.editTodo(prop.id)
        }
        if(prop.isSave) {
            prop.saveEditedTodo(prop.id);
        }
    }
    return(
        <button 
            className="btn"
            onClick={handleButtonClick}
            style={prop.isEdit ? {padding: '0.5em 1.2em',marginRight:'4px'} : {}}
        >
        {prop.value}
        </button>   
    )
}