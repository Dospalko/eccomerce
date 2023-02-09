import React, {useState, createContext} from 'react';

//vytvorim context
export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {

  //state

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = ()=> {
      setIsOpen(false);
  };


  return <SidebarContext.Provider value={{isOpen
  ,setIsOpen,handleClose}}>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
