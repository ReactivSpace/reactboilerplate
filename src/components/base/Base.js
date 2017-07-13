import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../../modules/Auth';
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
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Header from '../Header/Header';
import LeftDrawer from '../Header/LeftDrawer';
import Paper from 'material-ui/Paper';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import ViewModule from 'material-ui/svg-icons/action/view-module';
const titleStyles = {
  title: {
    cursor: 'pointer', color: '#2196F3'

  },
  color: {
    color: blue600
  },  logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      },
       iconsRightContainer: {
        marginLeft: 20,
        margin:9
      }
    }
};

const Base = ({ children }) => (
  <div>

   
  <Paper zDepth={1}>
          <Toolbar  style={titleStyles.logo}>
           {/*<IconButton><NavigationClose/></IconButton>*/}
            <ToolbarGroup firstChild={true}>
            <div style={titleStyles.logo}>
          User Admin App
        </div>
     </ToolbarGroup>
            {Auth.isUserAuthenticated() ? (

                 <ToolbarGroup>
                       <LeftDrawer roles={Auth.getRoleUser}/>
           <div style={titleStyles.iconsRightContainer}>
            <IconMenu color={white}iconButtonElement={
                              <IconButton>
                                <MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem containerElement={<Link to="/profile" />}  primaryText="Profile" />
            <MenuItem containerElement={<Link to="/logout" />} primaryText="Logout" />
                  </IconMenu>
                </div>
           </ToolbarGroup>
      ) : (
    
        <ToolbarGroup>

     </ToolbarGroup>
      )}
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
