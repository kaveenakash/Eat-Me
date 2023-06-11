import { Outlet } from "react-router-dom";

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

const Home: React.FC = () => {
  const categories: Category[] = [];

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Home;
