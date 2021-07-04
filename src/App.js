import './App.css';

const App = () => {
  const date = new Date();
  const weekday = date.getDay();
  const isSunday = weekday === 0;
  
  return (
    <div className="App">
      <div className="container">
        <div className="text">
          Jeff Fucking Chan, today
        </div>
        <div className={isSunday ? "condition-true" : "condition-false"}>
          {
            isSunday
            ? "IS"
            : "IS NOT"
          }
        </div>
        <div className="text">Sunday</div>
      </div>
    </div>
  );
}

export default App;
