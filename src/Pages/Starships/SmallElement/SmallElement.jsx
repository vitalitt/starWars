// global
import React from 'react';
import { List, ListItem } from 'material-ui/List';
// materialUI
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/action/check-circle';
// css
import './index.css';

const SmallListElement = ({ info }) => (
    <div>
        <List>
            <ListItem primaryText={info.name} rightIcon={<CommunicationChatBubble />} />
        </List>
        <Divider />
    </div>
);

export default SmallListElement;
