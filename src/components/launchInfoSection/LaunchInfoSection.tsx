import { Card, Row } from 'antd';
import SingleLaunchInfo from '../SingleLaunchInfo/SingleLaunchInfo';

const { Meta } = Card;

const LaunchInfoSection: React.FC = () => {
  return (
    <div style={{ width: '95%', margin: '50px auto'}}>
      <Row gutter={[8, 8]} justify={'center'} >
        {Array(10)
          .fill(1)
          .map((r) => (
            <SingleLaunchInfo />
          ))}
      </Row>
    </div>
  );
};

export default LaunchInfoSection;
