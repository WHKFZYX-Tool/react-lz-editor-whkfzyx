import React, {Component} from 'react';
import {Menu, Dropdown, Button, Icon, message} from "antd"
class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
    this.onMenuClick = (e) =>{      
      this.props.onToggle(e.key);
    };    
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton ant-btn ant-btn-primary ant-btn-icon-only ';
    }

    let ulMenu = (
        <Menu onClick={this.onMenuClick}>
            <Menu.Item key="unordered-list-item-disc">● 实心圆</Menu.Item>
            <Menu.Item key="unordered-list-item-circle">○ 空心圆</Menu.Item>
            <Menu.Item key="unordered-list-item-square">■ 小方块</Menu.Item>
            <Menu.Item key="unordered-list-item-image">▶ 小三角</Menu.Item>
        </Menu>
    );
    
    let olMenu = (
        <Menu onClick={this.onMenuClick}>
            <Menu.Item key="ordered-list-item-decimal-type1">1,2,3...</Menu.Item>
            <Menu.Item key="ordered-list-item-decimal-type2">1),2),3)...</Menu.Item>
            <Menu.Item key="ordered-list-item-decimal-type3">(1),(2),(3)...</Menu.Item>
        </Menu>
    ); 
    
    let ulolHTML = (
        <span>
        <span className={className} onClick={this.onToggle} title={this.props.text}>
            <Icon type={`${this.props.label}`}/>
        </span>
        <Dropdown overlay={this.props.style==='unordered-list-item'?ulMenu:olMenu}>
            <Icon type={`${'dropdown'}`}/>
        </Dropdown>
        </span>
    );

    let otherHTML = (
        <span className={className} onClick={this.onToggle} title={this.props.text}>
          <Icon type={`${this.props.label}`}/>
        </span>
    );    

    return (
      <span>
          {(() => {
              if(this.props.style==='unordered-list-item'||this.props.style==='ordered-list-item'){
                  return ulolHTML;
              } else {
                  return otherHTML;
              }
          })()}
          {(() => {
              if (!!this.props.split) {
                  return <span className="RichEditor-controls-split">{this.props.split}</span>;
              }
          })()}
      </span>
    );
  }
}
module.exports = StyleButton;
