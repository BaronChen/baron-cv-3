import * as React from "react";

export interface IHeaderProps {
	name: string,
	title: string
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px'
}

export default class Header extends React.Component<IHeaderProps> {
	public render() {
		const { name, title } = this.props;
		return (
      <div style={headerStyle}>
        <h1 style={{marginBottom: 0}}>{name}</h1>
        <h3 style={{marginTop: 0}}>{title}</h3>
      </div>			
		);
	}
}

