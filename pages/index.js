import Head from "next/head";
import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import AppLayout from "../components/layouts/AppLayout";

export default function Home() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div>
      <Head>
        <title>Mela Crypto-Trader</title>
        <meta name="description" content="Crypto currency traing and backtesting application " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
    </div>
  );
}
