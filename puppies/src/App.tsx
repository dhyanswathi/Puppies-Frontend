import React, {useState} from 'react';
import './App.css';
import { PuppyInfo } from './types';

function App() {
  const [puppy, setPuppy] = useState<PuppyInfo>({
    name: '',
    birthDate: new Date(),
    breed: '',
  });


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
