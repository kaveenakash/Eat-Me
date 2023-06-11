import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WorkIcon from "@mui/icons-material/Work";
import AllInboxIcon from "@mui/icons-material/AllInbox";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "Riders",
    icon: (
      <TwoWheelerIcon
        color="secondary"
        sx={{ width: "18px", height: "18px" }}
      />
    )
  },
  {
    id: 2,
    title: "Resturants",
    icon: (
      <RestaurantMenuIcon
        color="secondary"
        sx={{ width: "18px", height: "18px" }}
      />
    )
  },
  {
    id: 3,
    title: "Careers",
    icon: <WorkIcon color="secondary" sx={{ width: "18px", height: "18px" }} />
  },
  {
    id: 3,
    title: "Deliveroo for Work",
    icon: (
      <AllInboxIcon color="secondary" sx={{ width: "18px", height: "18px" }} />
    )
  }
];

interface MenuItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}
