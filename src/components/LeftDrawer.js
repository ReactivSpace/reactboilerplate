import React,  { PropTypes } from 'react';
import Auth from '../modules/Auth';

import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;
  const titleStyles = {
    logo: {
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
      },div1: {
        padding: '15px 0 20px 15px',
        height: 45,
       boxShadow: '0px 0px 0px 2px rgba(0,0,0,0.2)' 
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
      }
    }
  };

  return (
  
  <Drawer style={titleStyles.drawer}>
            <div style={titleStyles.logo}>
          User Admin App
        </div>
           <div style={titleStyles.avatar.div1}>
          <Avatar src="https://image.flaticon.com/icons/png/512/78/78373.png"
                  size={50}
                  style={titleStyles.avatar.icon}/>
          <span style={titleStyles.avatar.span}> Welcome{Auth.isUserAuthenticated}</span>
        </div>   
           {Auth.RoleUser===3? (
            <ListItem value={1}primaryText="Schedule"nestedItems={[
             <ListItem  value={2} primaryText="upload" containerElement={<Link to="/upload" />}/>,
             <ListItem  value={2} primaryText="metrics" containerElement={<Link to="/metrics" />}/>,
             <ListItem  value={2} primaryText="schedule" containerElement={<Link to="/schedule" />}/>
            ]}/>
            ):(
            <ListItem value={1}primaryText="Upload"nestedItems={[
            <ListItem  value={2} primaryText="upload" containerElement={<Link to="/upload" />}/>,
            <ListItem  value={2} primaryText="schedule" containerElement={<Link to="/schedule" />}/>,
            <ListItem  value={2} primaryText="metrics" containerElement={<Link to="/metrics" />}/>,
            ]}/>
            )}
           <ListItem value={1}primaryText="Metrics"nestedItems={[
             <ListItem  value={2} primaryText="upload" containerElement={<Link to="/upload" />}/>,
             <ListItem  value={2} primaryText="schedule" containerElement={<Link to="/schedule" />}/>,
            <ListItem  value={2} primaryText="metrics" containerElement={<Link to="/metrics" />}/>,]}/>
            <ListItem value={1}primaryText="User Management"nestedItems={[
             <ListItem  value={2} primaryText="User List" containerElement={<Link to="/listuser" />}/>,]}/>
        
         </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
