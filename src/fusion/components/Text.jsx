import PropTypes from 'prop-types';
import styled from 'styled-components';

// ${props => props.center && 'text-align: center;' || props.left && 'text-align: left;' || props.right && 'text-align: right;'}

const Text = styled.p`
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
`;

/* Props Check */
Text.propTypes = {
  /**
   * Text align
  */
  aling: PropTypes.string,
  /**
   * Text align
  */
  weight: PropTypes.string,
  /**
   * Text align
  */
  size: PropTypes.number
};

/* Deafult Props */
Text.defaultProps = {
  align: "left",
  weight: "bold",
  size: 18
};

export default Text;
