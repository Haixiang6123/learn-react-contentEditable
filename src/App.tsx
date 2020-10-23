import React, {useRef} from 'react'
import ContentEditable, {ContentEditableEvent} from "react-contenteditable"

function App() {
  const value = useRef('');

  const onChange = (event: ContentEditableEvent) => {
    value.current = event.target.value;
  }

  const onAddButton = () => {
    value.current += '<button contenteditable="false">Hello</button>';
  }

  return (
    <div className="App">
      <ContentEditable html={value.current} onChange={onChange} />
      <button onClick={onAddButton}>Add Button</button>
    </div>
  );
}

export default App;
