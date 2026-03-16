import { useState } from "react";
import "./App.css";

function App() {

  const tasks = [
    "Wake up - 5:15 AM",
    "Study Revision - 5:30 AM",
    "Breakfast - 6:15 AM",
    "Travel / Listen Audio - 7:00 AM",
    "Rest - 5:00 PM",
    "Practice Subject - 5:30 PM",
    "Break - 6:30 PM",
    "Skill Development - 7:00 PM",
    "Dinner - 9:00 PM",
    "Sleep - 10:00 PM"
  ];

  const [completed, setCompleted] = useState([]);

  const toggleTask = (task) => {
    if (completed.includes(task)) {
      setCompleted(completed.filter((t) => t !== task));
    } else {
      setCompleted([...completed, task]);
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>📅 Daily Routine Tracker</h1>

      {tasks.map((task, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleTask(task)}
            />
            {task}
          </label>
        </div>
      ))}

      <h3>
        Completed Tasks: {completed.length} / {tasks.length}
      </h3>

    </div>
  );
}

export default App;