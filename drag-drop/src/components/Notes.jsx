import {useEffect} from 'react'
import Note from './Note'

const Notes =({notes = [],setNotes = () => {}}) => {

    useEffect(() => {
        let updatedNotes = notes.map(note => {
           let position = getNewPostition(note.id)
           return {...note, position}
        })
        console.log("updated",updatedNotes)
        setNotes(updatedNotes)
    },[notes.length])

    const getNewPostition = () => {
        let maxX = window.innerWidth - 250
        let maxY = window.innerHeight - 250
        
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }

    }
    return(
        <div>
      
            {notes.map(nt => {
                return <Note key={nt.id} initialPos={nt.position} text={nt.text}  />    
            })}
        </div>
    )
}

export default Notes