import React from 'react'
import './SideDrawer.css'

class SideDrawer extends React.Component{

	render(){
		let drawerClasses= ['side-drawer'];
		if (this.props.show){
			drawerClasses = 'side-drawer open';
		}
		return(
				<nav className={drawerClasses}>
				<ul>
					<li><a href="/">Productos</a></li>
					<li><a href="/">Usuarios</a></li>
				</ul>
				</nav>	
			);
	}
}

export default SideDrawer;