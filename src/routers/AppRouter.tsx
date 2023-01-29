import { Route, Routes } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import HomePage from '../pages/homePage/HomePage';
import LaunchDetailsPage from '../pages/LaunchDetailsPage/LaunchDetailsPage';

const AppRouter: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/launches" element={<HomePage />} />
        <Route path="/launches/:id" element={<LaunchDetailsPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
