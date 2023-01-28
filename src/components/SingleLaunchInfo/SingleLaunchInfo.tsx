import { Button, Card, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { dateFormatter } from '../../util/dateFormater';

interface SingleLaunchInfoProps {
  launch: {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_local: string;
  };
}

const SingleLaunchInfo: React.FC<SingleLaunchInfoProps> = ({ launch }) => {
  const {
    flight_number,
    mission_name: missionName,
    launch_year: launchYear,
    launch_date_local,
  } = launch;
  const { mission_patch, flickr_images } = launch?.links;

  const { month, year } = dateFormatter(launch_date_local);

  const navigate = useNavigate();

  const handleClick = (flightId: number) => {
    navigate(`/launches/${flightId}`);
  };

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
        <Button onClick={() => handleClick(flight_number)}>View Details</Button>
      </Card>
    </Col>
  );
};

export default SingleLaunchInfo;
