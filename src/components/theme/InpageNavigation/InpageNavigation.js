import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

class InpageNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
      removeClass: 'hidden',
    };
  }

  handleInpageNavigationVisibility = () => {
    const position = window.scrollY;
    this.setState({ scrollPosition: position });

    if (this.state.scrollPosition > 50) {
      return this.setState({ removeClass: '' });
    } else {
      return this.setState({ removeClass: 'hidden' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleInpageNavigationVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleInpageNavigationVisibility);
  }

  onInpageNavigationClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Container>
        <div
          id="inpage-navigation"
          onClick={this.onInpageNavigationClick}
          role="none"
          className={this.state.removeClass}
        >
          <div className="eea navigation mobile tablet only">
            <Icon name="chevron up" />
          </div>
          <div className="eea navigation tablet or lower hidden">
            <Icon name="chevron up" /> top
          </div>
        </div>
      </Container>
    );
  }
}

export default InpageNavigation;