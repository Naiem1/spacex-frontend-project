import { Divider, Layout, Radio, RadioChangeEvent, Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const { Sider } = Layout;

const menuData: string[] = [
  'all',
  'Last Week',
  'Last Month',
  'Last Year',
  'Failure',
  'Success',
  'Up Coming Launch',
];

const Sidebar: React.FC = () => {
  const [value, setValue] = useState<string>('all');

  const onChangeRadio = (e: RadioChangeEvent) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#8D8078',
        color: '#FFFF',
        padding: '15px 25px 0',
      }}
    >
      <Title
        level={2}
        style={{
          height: 32,
          margin: 16,
          color: '#FFFFFF',
        }}
      >
        Filters
      </Title>

      <div style={{ marginTop: '50px' }} />

      <Radio.Group size="large" onChange={onChangeRadio} value={value}>
        {menuData.map((val, i) => (
          <div key={val}>
            {i && <Divider />}
            <Radio value={val}>{val}</Radio>
          </div>
        ))}
      </Radio.Group>
    </Sider>
  );
};

export default Sidebar;
