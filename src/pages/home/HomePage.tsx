import React from 'react'
import styles from './HomePage.module.css'
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Partners
} from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from '../../mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { useTranslation, Trans } from 'react-i18next'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        {/* 头部区域 */}
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        {/* 推荐栏目 */}
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              {t('home_page.hot_recommended')}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t('home_page.new_arrival')}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t('home_page.domestic_travel')}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
        {/* 合作企业 */}
        <Partners />
      </div>
      <Footer />
    </>
  )
}
