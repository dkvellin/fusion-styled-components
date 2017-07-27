import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertIcon = styled.i`
  position: absolute;
  top: 16px;
  left: 20px;
  font-size: 24px;
  line-height: 1.5;
`;

const AlertMessage = styled.span`
  font-size: 14px;
  color: rgba(0,0,0,.85);
  display: block;
  margin-bottom: 4px;
`;

const AlertDescription = styled.span`
  display: block;
  font-size: 12px;
  line-height: 21px;
`;

const Alert = styled.div.attrs({
  	type: props => {
      if(props.type === 'success') {
        return '#ebf8f2'
      }
      if(props.type === 'info') {
        return '#ecf6fd'
      }
      if(props.type === 'warning') {
        return '#fffaeb'
      }
      if(props.type === 'error') {
        return '#fef0ef'
      }
    },
    border: props => {
      if(props.type === 'success') {
        return '#cfefdf'
      }
      if(props.type === 'info') {
        return '#d2eafb'
      }
      if(props.type === 'warning') {
        return '#fff3cf'
      }
      if(props.type === 'error') {
        return '#fcdbd9'
      }
    },

})`
    background: ${props => props.type};
    padding: 10px;
    color: rgba(0,0,0,.65);
    border: 1px solid ${props => props.border};
`;

/* Props Check */
Alert.propTypes = {
  /**
  * Type of Alert
  */
  type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
};

/* Deafult Props */
Alert.defaultProps = {
  type: "success",
};

export default (props) => (
  <Alert type={props.type}>
    <AlertIcon/>
    <AlertMessage children={props.message}/>
    <AlertDescription children={props.description}/>
  </Alert>
);
