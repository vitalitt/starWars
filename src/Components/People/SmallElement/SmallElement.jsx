// global
import React from 'react';
// materialUI
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/action/check-circle';

const SmallListElement = ({ info }) => (
    <div>
        <List>
            <ListItem primaryText={info.name} rightIcon={<CommunicationChatBubble />} />
        </List>
        <Divider />
    </div>
);

export default SmallListElement;
