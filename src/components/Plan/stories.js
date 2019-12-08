import React from 'react';

import Card from 'components/Card';

import { PlanProvider } from './index';

export default {
  title: 'Components/Plan',
};

export const defaultProps = () => (
  <PlanProvider
    properties={{
      backgroundColor: ['rgb(20, 20, 20)', 'rgb(30, 30, 30)', 'rgb(40, 40, 40)'],
      boxShadow: [
        '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      ],
    }}
  >
    <Card>
      <Card>hello</Card>
      <Card>world</Card>
      <Card>
        <Card>!</Card>
      </Card>
    </Card>

    <Card>john doe</Card>
  </PlanProvider>
);
