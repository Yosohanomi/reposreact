import './App.css';
import { Button } from './Btn/Button';
const fruits =['apple', 'banana', 'fig']
function App({test}) {
  const info = 'зареєструватися';
  // console.log(props); це обєкт в якому лежать данні які ми передавали в цей компонент функцію
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
      <Button text={info} message='read more'/>
      <p>{test}</p>
    </div>
  );
}

export default App;
