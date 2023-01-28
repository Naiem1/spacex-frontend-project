import { Button, Card, Col, Typography } from 'antd';

interface SingleLaunchInfoProps {
  launch: {
    mission_id: number;
    mission_name: string;
    launch_year: string;
    launch_date_local: string;
  };
}

const SingleLaunchInfo: React.FC<SingleLaunchInfoProps> = ({ launch }) => {
  const {
    mission_id,
    mission_name: missionName,
    launch_year: launchYear,
    launch_date_local,
  } = launch;
  const { mission_patch, flickr_images } = launch?.links;

  const date = new Date(launch_date_local).toDateString();
  const [day, month, _monthCount, year] = date.split(' ');

  console.log(day, month, year);

  return (
    <Col xs={16} sm={16} md={8} lg={8} xl={6}>
      <Card
        bordered
        hoverable
        style={{ width: '100%' }}
        cover={
          <img
            alt="mission"
            style={{ height: '300px' }}
            src={flickr_images.length > 0 ? flickr_images![3] : mission_patch}
          />
        }
      >
        <div>
          <Typography.Title level={5}>
            {month} {year}
          </Typography.Title>
        </div>
        <Typography.Title level={4}>{missionName}</Typography.Title>
        <Button>View Details</Button>
      </Card>
    </Col>
  );
};

export default SingleLaunchInfo;
