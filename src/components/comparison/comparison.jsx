import React, { Component } from 'react';
import './comparison.css';
import Analysis from '../analysis/analysis';
import { getComparisons, reanalyse } from '../../services/api';

class Comparison extends Component {
  state = {
    comparison: {
      id: undefined,
      up_to_standards: undefined,
      change: {},
      commits: []
    },
    status: 'success'
  };

  async componentDidMount() {
    this.getComparisons();
  }

  async getComparisons() {
    const { data } = await getComparisons();
    const comparison = data[0];

    this.setState({ comparison });
  }

  handleReAnalyse = async event => {
    this.setState({ status: 'loading' });

    const comparison = { ...this.state.comparison };

    try {
      const response = await reanalyse();

      Object.assign(comparison, response.data[0]);

      this.setState({ comparison, status: 'success' });
    } catch (error) {
      Object.assign(comparison, error.data[0]);

      this.setState({ comparison, status: 'error' });
    }
  };

  render() {
    const { comparison, status } = this.state;

    return (
      <div>
        <div class="card">
          <Analysis
            key={comparison.id}
            comparison={comparison}
            onReAnalyse={this.handleReAnalyse}
            status={status}
          ></Analysis>
        </div>
      </div>
    );
  }
}

Comparison.defaultProps = {
  status: 'loading' || 'error' || 'success'
};

export default Comparison;
