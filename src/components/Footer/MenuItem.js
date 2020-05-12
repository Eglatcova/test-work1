import React from "react";

class MenuItem extends React.Component {
 render() {
   return <a className={this.props.className} href={this.props.href}>{this.props.name}</a>;
 }
}

export default MenuItem;