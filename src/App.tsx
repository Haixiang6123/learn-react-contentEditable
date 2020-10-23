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
    innerRef.current.innerHTML += '&nbsp;<button contenteditable="false">姓名</button>&nbsp;'
  }

  return (
    <div className="App">
      <ContentEditable
        style={{ border: '1px solid black', height: 100 }}
        innerRef={innerRef}
        html={value.current}
        onChange={onChange}
      />
      <button onClick={onAddButton}>添加姓名</button>
    </div>
  );
}

export default App;
