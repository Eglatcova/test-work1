import React from 'react';
import { Link } from "react-router-dom";

class FooterButton extends React.Component {
 render() {
   return (
   <Link
     className = {this.props.className}
     to={this.props.to}
   >
     {this.props.name}
   </Link>
   );
 }
}

export default FooterButton;