import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import LaunchDetailsPage from '../pages/LaunchDetailsPage/LaunchDetailsPage';
import SearchBar from '../components/SearchBar/SearchBar';



const AppRouter: React.FC = () => {

  return (
    <>
      <SearchBar/>
      <Routes>
        <Route path="/launches" element={<HomePage />} />
        <Route path="/launches/:id" element={<LaunchDetailsPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
