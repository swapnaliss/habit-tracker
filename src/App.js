
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HabitList from './components/HabitList';

function App() {
  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <button>Add New Habit</button>
      <HabitList />
    </div>
  );
}

export default App;
