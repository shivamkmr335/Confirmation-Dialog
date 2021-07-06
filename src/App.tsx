import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import {ExclamationIcon, XIcon} from "@heroicons/react/outline";
import HeadlessUI from './headlessUI';


// import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';



function App() {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setIsOpen(!isOpen)}>Click Me</button>
      <HeadlessUI okText="Select" open={isOpen} onClose={setIsOpen}></HeadlessUI>
    </div>
  );
}

export default App;
