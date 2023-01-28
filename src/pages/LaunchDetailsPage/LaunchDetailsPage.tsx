import { Col, Row, Spin, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useLaunchQuery } from '../../api/spacexApi';
import { dateFormatter } from '../../util/dateFormater';

const { Title, Paragraph } = Typography;

const LaunchDetailsPage: React.FC = () => {
  const { id } = useParams<string>();

  const { data, isLoading } = useLaunchQuery(id);
  if (isLoading) {
    return <Spin size="large" />;
  }

  const { mission_patch, flickr_images, video_link } = data.links;
  const {
    mission_name,
    upcoming,
    launch_date_local,
    details,
    flight_number,
    launch_success,
  } = data;
  const { rocket_id, rocket_name } = data?.rocket;
  const { site_name, site_name_long } = data?.launch_site;

  const { month, date, year } = dateFormatter(launch_date_local);

  return (
    <div
      style={{
        padding: '10px',
        background: '#000',
        color: '#FFFF',
        height: '100vh',
      }}
    >
      <div style={{ marginTop: '60px' }}>
        <img
          style={{
            width: '100%',
            objectFit: 'fill',
            height: '60vh',
          }}
          src={flickr_images.length > 0 ? flickr_images[0] : mission_patch}
          alt="img"
        />
      </div>

      <Row justify="space-between">
        <Col span={16}>
          <Title level={5} style={{ color: '#FFFF' }}>
            {month} {date}, {year}
          </Title>
          <Title level={3} style={{ marginTop: 0, color: '#FFF' }}>
            {mission_name}
          </Title>
          <Paragraph style={{ color: '#FFFF' }}>{details}</Paragraph>
        </Col>

        <Col span={8} style={{ marginTop: '50px' }}>
          <Row justify="space-between">
            <Col span={12}>
              <Title style={{ color: '#FFFF' }} level={5}>
                Flight Number: {flight_number}
              </Title>
              <Title style={{ color: '#FFFF' }} level={5}>
                Rocket: {rocket_name}
              </Title>
            </Col>
            <Col span={12}>
              <Title style={{ color: '#FFFF' }} level={5}>
                Launce: {launch_success === true ? 'Success' : 'Fail'}
              </Title>
              <Title style={{ color: '#FFFF' }} level={5}>
                Location: {site_name}
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LaunchDetailsPage;
