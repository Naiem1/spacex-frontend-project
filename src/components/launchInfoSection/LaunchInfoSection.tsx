import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useLaunchesQuery } from '../../api/spacexApi';
import SingleLaunchInfo from '../SingleLaunchInfo/SingleLaunchInfo';

const LaunchInfoSection: React.FC = () => {
  const { data, isLoading } = useLaunchesQuery();
  const searchValue = useSelector((state) => state.searchValue);

  const radioValue = useSelector((state) => state.filterValue);

  let launchData = data;

  if (radioValue.value === 'Success') {
    launchData = data?.filter((data) => data.launch_success);
  }

  if (radioValue.value === 'Failure') {
    launchData = data?.filter((data) => !data.launch_success);
  }

  if (radioValue.value === 'Upcoming') {
    launchData = data?.filter((data) => data.upcoming);
  }

  const lastYear = (new Date().getFullYear() - 1).toString();

  if (radioValue.value === 'Last Year') {
    launchData = data?.filter((data) => data.launch_year === lastYear);
  }

  if (searchValue.value) {
    launchData = data?.filter(
      (data) =>
        data.rocket.rocket_name.toLowerCase() === searchValue.value.toLowerCase()
    );
  }

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
        {launchData?.map((launch) => (
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
