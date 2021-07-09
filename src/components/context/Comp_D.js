import React from 'react';
import { userContext, channelContext } from './context_intro';

const CompD = () => {
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (
                            <channelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value: {user}, channel context value: {channel} </div>
                                    }
                                }
                            </channelContext.Consumer>
                            )
                    }
                }
            </userContext.Consumer>
        </div>
    )
};
export default CompD;