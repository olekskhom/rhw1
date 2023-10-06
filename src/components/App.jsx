import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics stats={data} />
    </div>
  );
};
