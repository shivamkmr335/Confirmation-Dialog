import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import {ExclamationIcon} from "@heroicons/react/outline";

interface Props {
    title?: string;
    description?: string;
    okText?: string;
    canceltext?: string;
    open?: boolean;
    onClose: (open:false) => void;
}

const HeadlessUI: React.FC<Props> = (props) => {

  
    
  return (
      <>
        
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog open={props.open} onClose={props.onClose}>
          
          <Transition.Child 
          as={Fragment}
          enter="transition-transform duration-700"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          >
            <div className="fixed top-20 flex  flex-col h-96 left-1/3  z-20 p-5 transform bg-white w-96 ">
              <button onClick={()=>props.onClose(false)} className="absolute top-0 right-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
              <ExclamationIcon className="text-red-600 h-32"></ExclamationIcon>
              <h1 className="text-xl w-full flex justify-center mt-5">{props.title}</h1>
              <p className="text-gray-600 w-full flex justify-center text-center text-sm mt-4">{props.description}</p>

              <div className="w-full flex justify-center mt-8">
                <button onClick={()=>props.onClose(false)} className="py-1 rounded-sm w-40 text-center px-8 mx-2 text-white justify-center hover:bg-gray-700 bg-gray-400">{props.okText}</button>
                <button onClick={()=>props.onClose(false)} className="py-1 rounded-sm w-40 text-center px-8 mx-2 text-white justify-center hover:bg-red-700 bg-red-500">{props.canceltext}</button>
              </div>
            </div>

          </Transition.Child>
          <Transition.Child 
          as={Fragment}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          entered="opacity-50"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 bg-black"> 
            </Dialog.Overlay>

          </Transition.Child>
        </Dialog>
      </Transition.Root>
      </>
  );
};

HeadlessUI.defaultProps = {
    open: false,
    title: "Are You Sure ?",
    description: "Do you really wanna declare these recoreds? This process cannot be undone",
    okText: "Accept",
    canceltext: "Cancel",
}

export default HeadlessUI;