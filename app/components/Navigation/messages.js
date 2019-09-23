/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Navigation';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  aboutUs: {
    id: `${scope}.aboutUs`,
    defaultMessage: 'About Us',
  },
});
