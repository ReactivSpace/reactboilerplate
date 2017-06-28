import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Metric = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Metric"
      // subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Metric.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Metric;
