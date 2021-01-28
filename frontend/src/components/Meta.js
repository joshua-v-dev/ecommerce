import {Helmet} from 'react-helmet';

import React from 'react';

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Off Set Designs',
  description: 'We have the best designs',
  keywords: 'designs, buy art, buy clothes',
};

export default Meta;
