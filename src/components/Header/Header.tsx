import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { MenuProps } from 'rc-menu'
import { useNavigate } from 'react-router-dom'
import { Trans } from 'react-i18next'
import {
  addLanguageActionCreator,
  changeLanguageActionCreator
} from '../../redux/language/languageActions'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'

export const Header: React.FC = () => {
  /* 导航栏列表数据 */
  const navItems: MenuProps['items'] = [
    { label: <Trans>header.home_page</Trans>, key: 1 },
    { label: <Trans>header.weekend</Trans>, key: 2 },
    { label: <Trans>header.group</Trans>, key: 3 },
    { label: <Trans>header.backpack</Trans>, key: 4 },
    { label: <Trans>header.private</Trans>, key: 5 },
    { label: <Trans>header.cruise</Trans>, key: 6 },
    { label: <Trans>header.hotel</Trans>, key: 7 },
    { label: <Trans>header.local</Trans>, key: 8 },
    { label: <Trans>header.theme</Trans>, key: 9 },
    { label: <Trans>header.custom</Trans>, key: 10 },
    { label: <Trans>header.study</Trans>, key: 11 },
    { label: <Trans>header.visa</Trans>, key: 12 },
    { label: <Trans>header.enterprise</Trans>, key: 13 },
    { label: <Trans>header.high_end</Trans>, key: 14 },
    { label: <Trans>header.outdoor</Trans>, key: 15 },
    { label: <Trans>header.insurance</Trans>, key: 16 }
  ]

  /* hooks函数 */
  const navigate = useNavigate()
  const language = useSelector(state => state.language)
  const languageList = useSelector(state => state.languageList)
  const dispatch = useDispatch()

  const menuClickHandler = e => {
    console.log(e.key)
    if (e.key === 'new') {
      //处理新语言添加aciton
      dispatch(addLanguageActionCreator('新语言', 'new_lang'))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
  }

  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>
            <Trans>header.slogan</Trans>
          </Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map(l => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                })}
                <Menu.Item key={'new'}>
                  <Trans>header.add_new_language</Trans>
                </Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === 'zh' ? '中文' : 'EngLish'}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigate('/register')}>
              <Trans>header.register</Trans>
            </Button>
            <Button onClick={() => navigate('/signin')}>
              <Trans>header.signin</Trans>
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            <Trans>header.title</Trans>
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={'请输入旅游目的地、主题、或关键字'}
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu
        mode={'horizontal'}
        className={styles['main-menu']}
        items={navItems}
      />
    </div>
  )
}
