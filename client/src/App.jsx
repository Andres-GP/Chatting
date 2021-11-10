
import React from "react";
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";

//import { ChannelSearch } from "./components/ChannelSearch";

import './App.css';

const cookies = new Cookies();

//import { ChannelListcontainer, ChannelContainer } from './components';

const apiKey = 'hnavqk4dpab8';
const authToken = cookies.get("token")

const client= StreamChat.getInstance(apiKey)

if (authToken){
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}

const App = () => {

    if (!authToken) return <Auth/>

    return (
        <div className= "app__wrapper">
            <Chat client={client} theme ="team light">
                <ChannelListContainer
                
                />
                <ChannelContainer
                
                />
            </Chat>
        </div>
    );
}

export default App;