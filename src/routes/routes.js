import React from 'react';

import List from '../pages/List';
import Register from '../pages/Register';

export const routes = {
  '/': () => <List />,
  '/register/:id': ({ id }) => {
    const re = /^[\w\d]{8}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{12}/;

    return (re.test(id) && <Register id={id} />);
  },
  '/private-route': () => <Register isPrivate />
};
