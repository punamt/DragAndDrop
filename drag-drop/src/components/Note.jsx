const Note = ({ initialPos, text, ...props}) => {
    const dropNote = (event) => {
        event.target.style.left = `${event.pageX - 50}px`
        event.target.style.top = `${event.pageY - 50}px`
    }

    const dragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }
    return(
        <div style={{
            width: '200px',
            position: 'absolute',
            left:`${initialPos?.x}px`,
            top:`${initialPos?.y}px`,
            background: '1px solid black',
            padding: '20px',
            useSelect: 'none',
            cursor: 'move',
            backgroundColor: 'lightYellow'
        }}
        draggable
        onDragOver={dragOver}
        onDragEnd={dropNote}
        {...props}
        >
         📌 {text} 
        </div>
    )
}

export default Note