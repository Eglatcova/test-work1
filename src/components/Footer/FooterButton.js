import React from 'react';
import { Link } from "react-router-dom";

class FooterButton extends React.Component {
 render() {
   return (
   <a className = {this.props.className} as={this.props.as} to={this.props.to}>{this.props.name}</a>
   );
 }
}

export default FooterButton;