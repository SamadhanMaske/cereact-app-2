import React, { Component } from 'react'
import { ChannelConsumer, UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {name => {
                    return (
                        <ChannelConsumer>
                            {channel => {
                                return <div>Hello {name} {channel} from Component F</div>
                            }
                            }
                        </ChannelConsumer>
                    )
                }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF