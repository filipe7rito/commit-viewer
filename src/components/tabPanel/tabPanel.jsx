import React, { Component } from 'react';
import './tabPanel.css';

class TabPanel extends Component {
  state = {
    activeTabId: undefined,
    tabs: []
  };

  componentDidMount() {
    const { tabs, activeTabId } = this.props;
    this.setState({ tabs, activeTabId });
  }

  handleOnClick = selectedTab => {
    this.setState({
      activeTabId: selectedTab.id
    });
  };

  render() {
    const { tabs, activeTabId } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          {tabs.map(tab => {
            return (
              <li key={tab.id} className="nav-item">
                <div
                  className={`tab ${
                    tab.id === activeTabId ? 'activeTab active' : ''
                  }`}
                  onClick={() => this.handleOnClick(tab)}
                >
                  {tab.name}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="content">
          {tabs.map(tab => {
            return (
              <div key={tab.id}>{tab.id === activeTabId && tab.content}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

TabPanel.defaultProps = {
  activeTabId: 0
};

export default TabPanel;
