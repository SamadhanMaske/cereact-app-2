
import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from './UserContext'

function ComponentE() {
    const name = useContext(UserContext);
    const cannel = useContext(ChannelContext);
    return (
        <div> 
            <ComponentF/>
            Hello {name} {cannel} from Component E
        </div>
    )
}

export default ComponentE