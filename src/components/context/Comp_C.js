import React, { useContext } from 'react';
import CompD from './Comp_D';
import { userContext, channelContext } from './context_intro';



const CompC = () => {

    const user = useContext(userContext);
    const channel = useContext(channelContext);

    return (
        <div>
            {user} {channel}
            <div>
                <CompD />
            </div>
        </div>
    )
};
export default CompC;