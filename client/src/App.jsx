
import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";


//import { ChannelListcontainer, ChannelContainer, Auth } from './components';
//import { ChannelSearch } from "./components/ChannelSearch";

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = 'hnavqk4dpab8';
const authToken = cookies.get("token");

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
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth/>

    return (
        <div className= "app__wrapper">
            <Chat client={client} theme ="team light">
                <ChannelListContainer
                    isCreating = {isCreating}
                    setIsCreating = {setIsCreating}
                    setCreateType = {setCreateType}
                    setIsEditing = {setIsEditing}
                />
                <ChannelContainer
                    isCreating = {isCreating}
                    setIsCreating = {setIsCreating}
                    isEditing = {isEditing}
                    setIsEditing = {setIsEditing}
                    createType = {createType}
                />
            </Chat>
        </div>
    );
}

export default App;