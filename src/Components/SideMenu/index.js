import React, { Component } from 'react';
import './style.css';

class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItem: [
        {
          hintText: 'Dashboard',
          link: 'www.google.com',
          iconClass: 'fa fa-home',
          isActive: true
        },
        {
          hintText: 'Users',
          link: 'www.google.com',
          iconClass: 'fa fa-users',
          isActive: false
        },
        {
          hintText: 'Contacts',
          link: 'www.google.com',
          iconClass: 'fa fa-file-signature',
          isActive: false
        },
        {
          hintText: 'Reports',
          link: 'www.google.com',
          iconClass: 'fa fa-chart-line',
          isActive: false
        },
        {
          hintText: 'Payments',
          link: 'www.google.com',
          iconClass: 'fa fa-credit-card',
          isActive: false
        },
        {
          hintText: 'Settings',
          link: 'www.google.com',
          iconClass: 'fa fa-cogs',
          isActive: false
        },
        {
          hintText: 'Accounts',
          link: 'www.google.com',
          iconClass: 'fa fa-atom',
          isActive: false
        },
        {
          hintText: 'Locations',
          link: 'www.google.com',
          iconClass: 'fa fa-map-marker-alt',
          isActive: false
        }
      ]
    }
  }
  render() {
    return (
      <div className="sideMenu">
        <ul>
          {this.state.menuItem.map((item,index)=>{
            return (
              <li key={index}>
                <a href="" className={item.isActive && 'active'}>
                  <i className={item.iconClass}></i>
                  <span>{item.hintText}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default SideMenu;
