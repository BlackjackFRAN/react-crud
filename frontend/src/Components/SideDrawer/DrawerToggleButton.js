import React from 'react';
import './DrawerToggleButton.css';

class DrawerToggleButton extends React.Component{

	render(){
		return(
				<button className="toggle-button" onClick={this.props.click}>
						<div className="toggle-button__line" />
						<div className="toggle-button__line" />
						<div className="toggle-button__line" />
				</button>

			);
	}
}
export default DrawerToggleButton;