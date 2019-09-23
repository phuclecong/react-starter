/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import { FormattedMessage } from 'react-intl';

function MenuLanguage(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { options, onChange, messages, value } = props;

  const handleClickLanguageIcon = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    onChange(options[index]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Menu"
        onClick={handleClickLanguageIcon}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={value === option}
            onClick={event => handleMenuItemClick(event, index)}
          >
            <FormattedMessage {...messages[option]} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

MenuLanguage.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  messages: PropTypes.object,
  value: PropTypes.string,
};

export default MenuLanguage;
