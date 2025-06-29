import React from "react";

export class HeaderName extends React.Component {
  render() {
    return (
      <h1>
        {this.props.name}
        alejandro
      </h1>
    );
  }
}
export function NameFunc({ children }) {
  return <div>{children}</div>;
}
