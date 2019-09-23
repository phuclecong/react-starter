/*
 * Menu Messages
 *
 * This contains all the text for the Menu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MenuLanguage';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English',
  },
  vi: {
    id: `${scope}.vi`,
    defaultMessage: 'Vietnamese',
  },
});
