
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Space, Typography, Divider, Form, DatePicker, Select} from 'antd';
const { Text, Link, Title } = Typography;
const { RangePicker } = DatePicker;

export default function Backtest() {
    const { data: session } = useSession()
    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 6,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 14,
        },
      },
    };
  

    if (session) {
        return (

            <div style={{
                marginTop: "10px",
            }}>
             <Title>Run Backtests with your custome scene</Title>
             <Divider/>
             <Form 
              onFinish={onFinish}
              style={{
                maxWidth: "700px"

              }}
              {...formItemLayout}
             >
              <Form.Item name='asset' label="Select Crypto">
                <Select>
                  <Select.Option value='ALGO'>ALGO</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name='indicator' label="Select Indicator">
                <Select>
                  <Select.Option value='SMA'>SMA</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name='date-range'  label="Select Date Range">
                <RangePicker />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type='primary' htmlType='submit'>RUN BACKTEST</Button>
              </Form.Item>
             </Form>
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
