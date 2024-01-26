import React from 'react'

// If chances are high that cuttonContainer will have menu then we can set it to default 
const Tabs = ({children, buttons, buttonContainer = "menu"}) => {
    const ButtonContainer = buttonContainer;
    return (
      <>
        <ButtonContainer>{buttons}</ButtonContainer>
        {children}
      </>
    );
}

export default Tabs