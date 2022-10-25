import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Tabs, Space, Typography, Avatar, Image } from 'antd';
const { Text, Link, Title } = Typography;

export default function Profile() {
    const { data: session } = useSession()
    const items = [
        {
            label: 'User Info',
            key: 'user-info',
            children: (
                <div style={{
                    paddingLeft: "50px"
                }}>
                    {
                        session && (
                            <Space direction='vertical'>
                                <Avatar
                                    size={100}
                                    src={<Image src={session.user.image} />}
                                />
                                <Title level={3}>{session.user.name}</Title>
                                <Link href=''>
                                    {session.user.email}
                                </Link>
                                <Button danger onClick={() => signOut()}>Sign out</Button>
                            </Space>
                        )
                    }
                </div>)
        },
        { label: 'Edit', key: 'edit-info', children: 'edit page' },
        { label: 'Plans', key: 'plans', children: 'Upgrade to proplan' },
    ];

    if (session) {
        return (

            <div style={{
                marginTop: "50px"
            }}>
                <Tabs
                    tabPosition='left'
                    items={items}
                />
            </div>
        )
    }
    return (
        <div>
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
        </div>
    )
}
