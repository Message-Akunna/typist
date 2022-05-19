import React, { FC, useState, createContext } from 'react';
//
interface Props {
  children: JSX.Element;
}
//
interface ITypistOptionsContext {
  showOptions: boolean;
  toggleOptions?: () => void;
  handleShowOptions?: () => void;
  handleCloseOptions?: () => void;
}

const defaultState = {
  showOptions: false,
};
// Context has been created
const TypistOptionsContext = createContext<ITypistOptionsContext>(defaultState);
// Provider
const TypistOptionProvider: FC<Props> = ({ children }) => {
  const [showOptions, setShowOptions] = useState(defaultState.showOptions);
  // 
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  // 
  const handleShowOptions = () => {
    setShowOptions(true);
  };
  // 
  const handleCloseOptions = () => {
    setShowOptions(false);
  };


  return (
    <TypistOptionsContext.Provider value={{ showOptions, toggleOptions, handleShowOptions, handleCloseOptions }}>
      {children}
    </TypistOptionsContext.Provider>
  );
};
export { TypistOptionsContext, TypistOptionProvider };
