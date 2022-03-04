import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

KeyContent.propTypes = {
  title: PropTypes.string,
};

function KeyContent({ children, ...rest }) {
  return (
    <div className={`eea key-content ${rest.variant}`} {...rest}>
      {children}
    </div>
  );
}

KeyContent.Title = ({ children }) => <p className="title">{children}</p>;
KeyContent.List = ({ children, ...rest }) => (
  <List bulleted horizontal={false} items={rest.items}></List>
);

export default KeyContent;
