import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Profile = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Profile"
      // subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Profile.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Profile;
