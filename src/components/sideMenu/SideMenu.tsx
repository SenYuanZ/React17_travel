import React from 'react'
import { sideMenuList } from './mockup'
import styles from './SideMenu.module.css'
import { GifOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, index) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={
              <span>
                <GifOutlined />
                {m.title}
              </span>
            }
          >
            {m.subMenu.map((sm, smindex) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${smindex}`}
                  title={
                    <span>
                      <GifOutlined />
                      {sm.title}
                    </span>
                  }
                >
                  {sm.subMenu.map((sms, smsIndex) => {
                    return (
                      <Menu.Item key={`sub-sub-menu-${smsIndex}`}>
                        <span>
                          <GifOutlined />
                          {sms}
                        </span>
                      </Menu.Item>
                    )
                  })}
                </Menu.SubMenu>
              )
            })}
          </Menu.SubMenu>
        )
      })}
    </Menu>
  )
}
