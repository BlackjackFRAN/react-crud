import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

class Toolbar extends React.Component{




render(){
	return(
		<header className="toolbar">
		<nav className="toolbar__navegation" >
			<div className= "toolbar__toggle-button"> <DrawerToggleButton click={this.props.drawerClickHandler} /> </div>
			<div className="toolbar__logo"><a href='/'>Logo</a></div>
			<div className="spacer"> </div>
			<div className="toolbar__navegation-items" >
			<ul>	
				<li><a href="/">Products</a></li>
				<li><a href="/">Users</a></li>
			</ul>	
			</div>
		</nav>
	</header>
	);
}
}

export default Toolbar;