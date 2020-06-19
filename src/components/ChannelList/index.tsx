import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return ( 

        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="rpg-snf" />
            <ChannelButton channelName="overwatch" />
            <ChannelButton channelName="lauchbase" />

        </Container>
    )
}

export default ChannelList;
