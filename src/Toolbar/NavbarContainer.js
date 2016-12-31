import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    
  return {
    /*loggedIn: state.session.loggedIn,
	user : state.session.user,
	notifications : state.session.notifications*/
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarContainer;