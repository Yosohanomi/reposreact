import './App.css';
const fruits =['apple', 'banana', 'fig']
function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <ul> 
        {
          fruits.map((fruit) => {
            return <li>{fruit}</li>
          })
        }     
      </ul>
    </div>
  );
}

export default App;
