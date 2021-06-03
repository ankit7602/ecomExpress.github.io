import React from 'react';
import clsx from 'clsx';
import nikita from '../../images/nikita.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {MdMailOutline} from 'react-icons/md';
import {AiFillShop, AiOutlineShopping} from 'react-icons/ai';
import {RiMenuUnfoldLine} from 'react-icons/ri'; 
import {Image} from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import {SiShopify} from 'react-icons/si';
import { FiLogIn, FiLogOut, FiPhone, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 function SideBar(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo }= userSignin; 
    const dispatch = useDispatch();
    
    const signoutHandler = () =>{
     dispatch(signout());
    }; 
    const routeSide = [
  
      {
         listIcon:<AiOutlineShopping/> ,
         listText: `${userInfo ? 'Cart' : ""}`, 
         listPath: `${userInfo?'/cart':""}`,
         click: ''
      },
      {
          listIcon:<AiFillShop/> ,
          listText: 'All Products', 
          listPath: '/all-products',
          click: ''
       },
       {
        listIcon:<SiShopify/> ,
        listText: `${userInfo ? 'Order History' : ""}`, 
        listPath: `${userInfo?'/order-history':""}`,
        click: ''
        
     },
       {
          listIcon:<FiPhone/> ,
          listText: 'Contact', 
          listPath: '/contact-us',
          click: ''
          
       },
       {
          listIcon:<FiLogOut></FiLogOut> ,
          listText: `${userInfo ? ('SignOut'):('Login')}`, 
          listPath: `${userInfo ? ('/'):('/log-in')}`,
          click: signoutHandler
       }
      ];

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Image style={{marginLeft:"1.5rem"}} roundedCircle src={`${userInfo ? `${nikita}`:("https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg")}`} width="200" height="200" alt="eva" />
      {
                  userInfo ? (
                    <div>
                    <Link className="nav-link"  style={{textAlign:"center", marginTop:"-0.5rem"}} to="/my-profile"  aria-expanded="false">
                    <h1>{userInfo.name}</h1>
                    <p style={{textAlign:"center", marginTop:"-1rem"}}>{userInfo.email}</p>
                    <h6 style={{textAlign:"center", marginTop:"-0.5rem"}} className="btn btn-warning">Profile</h6>
                    </Link>
                   
                 
                 </div>
                  ):
                  (
                    <Link className="nav-link" style={{textAlign:"center"}} to="/log-in">
                    <FiUser/> <h4>LOG IN</h4>
                    </Link>
                  )
                  
                
                }

      </List>
      <Divider />


      <List>
        {routeSide.map((text, index) => (
            <Link className="list-group-item" to={text.listPath} onClick={text.click}>
          <ListItem button key={index}>
            <ListItemIcon>{text.listIcon}</ListItemIcon>
            <ListItemText primary={text.listText} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><RiMenuUnfoldLine style={{fontSize:"2rem"}}/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default SideBar;