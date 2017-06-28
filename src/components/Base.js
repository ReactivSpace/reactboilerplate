import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
//
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { indigo500 } from 'material-ui/styles/colors'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
const titleStyles = {
  title: {
    cursor: 'pointer', color: '#2196F3'

  },
  color: {
    color: indigo500
  }
};
const Base = ({ children }) => (
  <div>

   
  <Paper zDepth={1}>
          <Toolbar    style={{backgroundColor:'#ffffff'}}>
           {/*<IconButton><NavigationClose/></IconButton>*/}
            <ToolbarGroup firstChild={true}>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGc_GGDySy1rSwoAhDoxTDOragNChQ15raeQRCmnbXR9_Y_1VTuA" style={{alignSelf: 'center',padding:'0',margin:'5'}} />
              <ToolbarTitle text="Ashvin"/>
              <FlatButton style={{alignSelf: 'center',margin:'5'}} containerElement={<Link to="/schedule" />} label="Schedule" />
              <FlatButton style={{alignSelf: 'center',margin:'5'}} containerElement={<Link to="/upload" />} label="Upload" />
              <FlatButton style={{alignSelf: 'center',margin:'5'}} containerElement={<Link to="/metrics" />} label="Metrics" />
            </ToolbarGroup>
            <ToolbarGroup>

         
               
              {Auth.isUserAuthenticated() ? (
       
    
        
        <div className="top-bar-right">
        <RaisedButton style={{alignSelf: 'center',margin:'5'}} containerElement={<Link to="/logout" />} label="Logout" warning/>
        </div>
      ) : (
        <div className="top-bar-right">
         <RaisedButton style={{alignSelf: 'center',margin:'5'}} containerElement={<Link to="/login" />} label="Login" />
          <RaisedButton style={{alignSelf: 'center',margin:'5'}} primary containerElement={<Link to="/signup" />} label="Signup" />
          
        </div>
      )}

             

         
            </ToolbarGroup>
          </Toolbar>
          </Paper>
    { /* child component will be rendered here */ }
    <br/><br/>
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
