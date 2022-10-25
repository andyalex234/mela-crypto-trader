import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';
import { DashboardOutlined, FundProjectionScreenOutlined, FieldTimeOutlined, WalletOutlined, HistoryOutlined, UserOutlined, RocketOutlined, AntDesignOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown, Space, Row, Button, Typography, Image } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <Link href='/profile'>
                        <a>Profile</a>
                    </Link>
                ),
            },
            {
                key: '4',
                danger: true,
                icon: <LogoutOutlined />,
                label: (
                    <a onClick={() => signOut()}>
                        Logout
                    </a>
                ),
            },
        ]}
    />
);



const AppLayout = ({ children }) => {
    const router = useRouter();
    const { data: session } = useSession();

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
                    className="site-layout-sub-header-background top-nav"
                    style={{
                        padding: 0,
                    }}
                >
                    <div
                        className='top-nav-right'
                    >
                        <Row
                            align="middle"
                            justify='space-between'
                            gutter={[16, 16]}
                        >
                            <Space direction='horizontal'>
                                {session ? (
                                    <>
                                        <Avatar
                                            size={45}
                                            src={<Image src={session.user.image}/>}
                                        />
                                        <Dropdown overlay={menu}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    {session.user.name}
                                                    <DownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </>

                                ) : (
                                    <>
                                        <Text type='secondary'>To enjoy all the features please</Text>
                                        <Button onClick={() => signIn()}>Signin/Signup</Button>
                                    </>
                                )}
                            </Space>
                        </Row>
                    </div>

                </Header>
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