import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const ToolItem = ({
  icon, link, className, children, asLink, target, ...remainingProps
}) => (
  <li
    key={uuidv4()}
    {...dataAttributes(remainingProps)}
  >
    <Link
      as={asLink}
      target={target}
      className={className}
      isSimple
      display="flex"
      icon={icon}
      iconPosition="left"
      iconSize="1x"
      href={link}
    >
      {children}
    </Link>
  </li>
);

ToolItem.defaultProps = {
  className: '',
  icon: '',
  link: '',
  asLink: null,
  target: '_self',
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.string,
  asLink: PropTypes.element,
  target: PropTypes.string,
};

export default ToolItem;
