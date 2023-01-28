import { Button, Card, Col } from 'antd';
import Meta from 'antd/es/card/Meta';

const SingleLaunchInfo: React.FC = () => {
  return (
    <Col xs={16} sm={16} md={8} lg={8} xl={6}>
      <Card
        bordered
        hoverable
        style={{ width: '100%' }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <Button>View Details</Button>
      </Card>
    </Col>
  );
};

export default SingleLaunchInfo;
