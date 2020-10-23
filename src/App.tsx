import React, {useRef} from 'react'
import ContentEditable, {ContentEditableEvent} from "react-contenteditable"

function App() {
  const innerRef = useRef<HTMLElement>(null);
  const value = useRef<string>('');

  const onChange = (event: ContentEditableEvent) => {
    value.current = event.target.value;
  }

  const onAddButton = () => {
    if (!innerRef.current) {
      return;
    }
    innerRef.current.innerHTML += '&nbsp;<button contenteditable="false">Hello</button>&nbsp;'
  }

  return (
    <div className="App">
      <ContentEditable innerRef={innerRef} html={value.current} onChange={onChange} />
      <button onClick={onAddButton}>Add Button</button>
    </div>
  );
}

export default App;
