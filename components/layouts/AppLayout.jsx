import React from 'react';
import { useRouter } from 'next/router'
import { DashboardOutlined, FundProjectionScreenOutlined, FieldTimeOutlined, WalletOutlined, HistoryOutlined, UserOutlined, RocketOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const AppLayout = ({ children }) => {
    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    // }

    const handleClick = (e, href) => {
        // e.preventDefault()
        router.push(href)
    }

    const menuItems = [
        {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            lable: 'Dashboard',
            href: '/'
        },
        {
            key: 'Backtest',
            icon: <FieldTimeOutlined />,
            lable: 'Backtest',
            href: '/backtest'
        },
        {
            key: 'index-fund',
            icon: <FundProjectionScreenOutlined />,
            lable: 'Index Fund',
            href: '/index-fund'
        },
        {
            key: 'portfolio',
            icon: <WalletOutlined />,
            lable: 'Portfolio',
            href: '/portfolio'
        },
        {
            key: 'history',
            icon: <HistoryOutlined />,
            lable: 'History',
            href: '/history'
        },
        {
            key: 'profile',
            icon: <UserOutlined />,
            lable: 'Profile',
            href: '/profile'
        }
    ];


    return (
        <Layout
            style={{ minHeight: '100vh' }}
        >
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" style={{
                    display: "flex",
                    alignItems: "baseline",
                    padding: "5px",
                    color: "white"
                }}>
                    <RocketOutlined span style={{
                        fontSize: "25px"
                    }} />
                    <h1
                        style={{
                            color: "white",
                            fontSize: "25px",
                            paddingLeft: "5px",
                            fontWeight: "bolder",
                            letterSpacing: '3px'
                        }}
                    >MELA</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={menuItems.map(
                        (item) => ({
                            key: item.key,
                            icon: item.icon,
                            label: item.lable,
                            onClick: (e) => handleClick(e, item.href)
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 700,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Mela Crypto-Trader ©2022
                </Footer>
            </Layout>
        </Layout>
    );
}
export default AppLayout;