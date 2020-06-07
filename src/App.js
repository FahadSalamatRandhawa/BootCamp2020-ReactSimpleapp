import React from 'react';

import './App.css';
import Hello from './hello';


function App({name,language,time}) {
return <div>
  Hello World from <em>Babushkhich ma</em> weans <strong>{name}</strong> in {language} within Time {time - 11} hour
  <ul>
    Files and tages used are :<br/><br/>
    <li><Hello mname='hello.js'></Hello></li></ul>
  </div>
    
}

export default App;
