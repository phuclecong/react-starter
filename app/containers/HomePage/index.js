/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import Box from '@material-ui/core/Box';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Box py={2}>
        <Box component="h2" color="primary.main">
          <FormattedMessage {...messages.header} />
        </Box>
        <Box component="p">
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
          <FormattedMessage {...messages.content} />
        </Box>
      </Box>
    </div>
  );
}
