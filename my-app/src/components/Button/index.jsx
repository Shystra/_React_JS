import P from 'prop-types';
import './styles.css';

//import { Component } from "react";

//export class Button extends Component{
//    render() {
//        const {text, onClick, disabled } = this.props;
//
//        return (
//            <button disabled={disabled} className='button' onClick={onClick}>
//                {text}
//            </button>
//        );
//    }
//}

export const Button = ({ text, onClick, disabled }) => (
    <button
      className='button'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );

Button.defaltProps = {
    disabled: false,
};

Button.propTypes = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool,
};
