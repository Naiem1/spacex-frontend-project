import { Layout, theme } from 'antd';
import LaunchInfoSection from '../../components/launchInfoSection/LaunchInfoSection';
import HeroSection from './components/heroSection/HeroSection';
import Sidebar from './components/Sidebar/Sidebar';

const { Content } = Layout;

const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ overflow: 'initial', marginLeft: '200px' }}>
          <div style={{ textAlign: 'center', background: '#060409' }}>
            <HeroSection />
            <LaunchInfoSection />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
