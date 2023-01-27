import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import HeroSection from './components/heroSection/HeroSection';

const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider>Sider</Sider>
      <Layout className="site-layout">
        <Content style={{ overflow: 'initial' }}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <HeroSection />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
