import { useState, } from 'react'
import Notes from './components/Notes'
import './App.css';

function App() {
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([{id:1,text:'Check the video of FrontEnd courses'}, 
  {id:2,text:'Go to the Groceries and buy Mangoes'}])

  const handleClick = () => {
   setNotes([...notes, {id: notes.length + 1, text: note}])
    setNote("")
  }
  return (
    <div className="App">
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
     <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
