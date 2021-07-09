import React from 'react';
import CompB from './Comp_B';

export const userContext = React.createContext();
export const channelContext = React.createContext();

const ContextOne = () => {
    return (
        <div>
            <userContext.Provider value={'Donner'} >
                <channelContext.Provider value={'Reindeer'} >
                    <CompB />
                </channelContext.Provider>
            </userContext.Provider>
        </div>
    )
};
export default ContextOne;