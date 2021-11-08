import React from 'react'
import { StreamChat } from 'stream-chat'; 
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

//import { ChannelContainer, ChannelListContainer } from './components';
import ChannelContainer from "./components/ChannelContainer"
import ChannelListContainer from "./components/ChannelListContainer"
import ChannelSearch from "./components/ChannelSearch";
import Auth from "./components/Auth"

import "./App.css"

const cookies = new Cookies();

const apiKey = 'hnavqk4dpab8';

const client = StreamChat.getInstance(apiKey)

const authToken = cookies.get("token");

if(authToken) {
    client.connectUset({
        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);
        cookies.set('phoneNumber', phoneNumber);
        cookies.set('avatarURL', avatarURL);
        cookies.set('hashedPassword', hashedPassword);
    })
}

const App = () => {
    if(!authToken) return <Auth />
    return (
        <div className="app_wrapper">
            <Chat client={client} theme ="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    );
}

export default App;