/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Navigation(props) {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItem component={RouterLink} to="/" onClick={props.handleDrawerClose}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage {...messages.home} />} />
      </ListItem>
      <ListItem
        component={RouterLink}
        to="/about"
        onClick={props.handleDrawerClose}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage {...messages.aboutUs} />} />
      </ListItem>
    </List>
  );
}

Navigation.propTypes = {
  handleDrawerClose: PropTypes.func,
};

export default Navigation;
