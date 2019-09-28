import React, { Component } from 'react';
import Navbar from './navbar'
import Container from '../container/container';

class Layout extends Component {

  state = {
    hamburgerLinksShouldShow: false
  }

  toggleHamburgerLinks = () => {
    this.setState(previousState => ({
      hamburgerLinksShouldShow: !previousState.hamburgerLinksShouldShow
    }))
  }

  render() {
    return (
      <>
        <Navbar
          hamburgerLinksShouldShow={this.state.hamburgerLinksShouldShow}
          toggleHamburgerLinks={this.toggleHamburgerLinks}
        />
        <main>
          <Container>
            {this.props.children}
          </Container>
        </main>
      </>
    );
  }
}

export default Layout;
