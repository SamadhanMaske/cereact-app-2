import React, { Component } from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const ChannelContext = React.createContext();
const ChannelProvider = ChannelContext.Provider;
const ChannelConsumer = ChannelContext.Consumer;

export {UserProvider, UserConsumer};
export {ChannelProvider, ChannelConsumer};
export {UserContext, ChannelContext};
// export default UserContext;