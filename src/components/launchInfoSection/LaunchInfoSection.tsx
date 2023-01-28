import { Row, Spin } from 'antd';
import { useLaunchesQuery } from '../../api/spacexApi';
import SingleLaunchInfo from '../SingleLaunchInfo/SingleLaunchInfo';

const LaunchInfoSection: React.FC = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useLaunchesQuery();

  console.log(data);

  if (isLoading) {
    return (
      <Spin
        size="large"
        style={{
          margin: '20px 0',
          marginBottom: '20px',
          padding: '30px 50px',
          textAlign: 'center',
          background: '#fdfdfd',
          borderRadius: '4px',
        }}
      />
    );
  }

  return (
    <div style={{ width: '95%', margin: '50px auto' }}>
      <Row gutter={[8, 8]} justify="center">
        {data?.map((launch) => (
          <SingleLaunchInfo
            key={launch?.launch_date_unix + launch.flight_number}
            launch={launch}
          />
        ))}
      </Row>
    </div>
  );
};

export default LaunchInfoSection;
