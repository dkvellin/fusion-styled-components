import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const el = React.createElement

const Heading = styled(
  ({ tag, children, ...props }) => el(tag, props, children)
)`
  color: black;
  text-align: ${props => props.align}
`;

Heading.propTypes = {
  /**
   * Available Tags
  */
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /**
   * Alignment
  */
  align: PropTypes.string,
};

Heading.defaultProps = {
  tag: 'h2',
  align: 'left'
};

export default Heading;
