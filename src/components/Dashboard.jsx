import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <Router>
    <div className="dashboard-container">

        <div>
          <WatchList />
        </div>

        <div className="content">
        
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        
        </div>
    </div>
    </Router>
  );
};

export default Dashboard;