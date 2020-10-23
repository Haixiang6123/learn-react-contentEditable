import React, {useState} from 'react'
import VarInput from "./lib/VarInput"

function App() {
  const [value] = useState('');

  const onChange = (value: string) => {
    console.log(value);
  }

  return (
    <div className="App">
      <VarInput value={value} onInput={onChange} />
    </div>
  );
}

export default App;
