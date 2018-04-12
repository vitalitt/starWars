import React from 'react';
import propTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/action/check-circle';
import './index.css';

const SmallListElement = ({ info }) => (
    <div>
        <List>
            <ListItem primaryText={info.name} rightIcon={<CommunicationChatBubble />} />
        </List>
        <Divider />
    </div>
);
SmallListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
};

export default SmallListElement;
