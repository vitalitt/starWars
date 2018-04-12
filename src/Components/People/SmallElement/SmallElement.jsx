import React from 'react';
import propTypes from 'prop-types';

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
SmallListElement.propTypes = {
    info: propTypes.shape({
        birth_year: propTypes.string.isRequired,
        created: propTypes.string.isRequired,
        edited: propTypes.string.isRequired,
        eye_color: propTypes.string.isRequired,
        gender: propTypes.string.isRequired,
        hair_color: propTypes.string.isRequired,
        height: propTypes.string.isRequired,
        homeworld: propTypes.string.isRequired,
        mass: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        skin_color: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
    }).isRequired,
};
export default SmallListElement;
