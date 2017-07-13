import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Upload = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Upload"
      // subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Upload.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Upload;
