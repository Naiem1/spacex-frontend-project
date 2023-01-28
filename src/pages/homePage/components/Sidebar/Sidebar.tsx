import { Divider, Layout, Radio, RadioChangeEvent, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterValue } from '../../../../store/filterSlice';

const { Title } = Typography;

const { Sider } = Layout;

const menuData: string[] = [
  'all',
  'Last Week',
  'Last Month',
  'Last Year',
  'Failure',
  'Success',
  'Upcoming',
];

const Sidebar: React.FC = () => {
  const [value, setValue] = useState<string>('all');
  const dispatch = useDispatch();

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(addFilterValue(value));
    console.log('rendering...', value);
    
  }, [value]);

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#24160f',
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
          <Title level={5} key={val}>
            {i && <Divider style={{ background: '#353434' }} />}
            <Radio style={{ color: '#FFF' }} value={val}>
              {val}
            </Radio>
          </Title>
        ))}
      </Radio.Group>
    </Sider>
  );
};

export default Sidebar;
