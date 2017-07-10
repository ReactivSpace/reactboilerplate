import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';

 const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '20%'
      },
      email: {
        width: '20%'
      },
      role: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };















export default function ListUserPage({secretData,users,deleteUser})  {
    const emptyMessage = (
       <Card className="container">
       <CardText style={{ fontSize: '16px', color: 'green' }}> There are no Users yet in your List</CardText>
        </Card>
    );
        const usersList = (
   <Card className="container">
         <div>
         <Link to="/userreques" >
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Username</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.email}>Email</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.role}>User Role</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
         {users.map(user=> 
           <TableRow>
                <TableRowColumn style={styles.columns.id}>{user.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{user.userName}</TableRowColumn>
                <TableRowColumn style={styles.columns.email}>{user.emailAddress}</TableRowColumn>
                <TableRowColumn style={styles.columns.role}>{user.UserRoleId}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to={'/user/'+user.id}>
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
              )}
          </TableBody>
        </Table>    
      </div>
          {/*{secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}*/}
  </Card>      
    );

    return (
        <div>
            {users.length===0 ?emptyMessage :usersList}
        </div>
    )
}
ListUserPage.propTypes = {
      users: React.PropTypes.array.isRequired,
    deleteUser:React.PropTypes.func.isRequired,
  // secretData: PropTypes.string.isRequired
};
