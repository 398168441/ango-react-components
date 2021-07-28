import React from 'react';
import Button, { ButtonType, ButtonSize } from 'components/Button/button'

function App() {
  return (
    <div className="App">
      <Button onClick={() => { console.log(123) }}>Hello</Button>

      <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      
      <Button btnType={ ButtonType.Link} href="http://www.baidu.com" target="_blank">Hello</Button>
    </div>
  );
}

export default App;
