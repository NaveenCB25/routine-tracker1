import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { motion } from "framer-motion";

<div className="progress">
  <motion.div
    className="bar"
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
    transition={{ duration: 0.5 }}
  />
</div>
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const [date, setDate] = useState(new Date());

<Calendar onChange={setDate} value={date} />

const [note, setNote] = useState("");

<textarea
  placeholder="Write your notes..."
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>

<button onClick={() => saveNote()}>
  Save Note
</button>
