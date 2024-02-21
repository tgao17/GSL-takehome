import { UserSidebar } from '../other/UserSidebar';
import { useFetchUsers } from '../customHooks/useFetchUsers';
import { Profile } from '../other/Profile';

export const Home = () => {
  const isLoading = useFetchUsers();

  if (isLoading) return <div>Fetching Users</div>;

  return (
    <div style={{ display: 'flex' }}>
      <UserSidebar />
      <Profile />
    </div>
  );
};
