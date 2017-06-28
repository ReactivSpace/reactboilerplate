import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Schedule = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Schedule"
      // subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Schedule.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Schedule;
