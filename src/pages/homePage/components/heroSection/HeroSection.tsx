import { Typography } from 'antd';
import heroImg from '../../../../assets/images/hero-img.jpg';

const { Title } = Typography;

const HeroSection: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          width: '100%',
          height: '90vh',
          objectFit: 'cover',
        }}
        src={heroImg}
        alt="img"
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '50%',
        }}
      >
        <Title>Launches</Title>
      </div>
    </div>
  );
};

export default HeroSection;
