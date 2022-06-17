import { Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div>
      <Sidebar>
        <StatCard number={714} subtitle={"Total Booking"} />
      </Sidebar>
    </div>
  );
};
export default Dashboard;
