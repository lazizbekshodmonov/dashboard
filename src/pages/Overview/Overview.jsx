import Saidbar from "../../components/Sidebar/Sidebar";
import Task from "../../components/Task/Task";
import Header from "../../components/header/Header";
import Statistics from "../../components/Statistics/Statistics";
import "./overview.scss";
import TaskList from "../../components/TaskList/TaskList";
const Overview = () => {
  return (
    <div className="overview">
      <Saidbar props={"overview"} />
      <div className="container">
        <Header titleName={"Overview"} search={false} />
        <Task />
        <Statistics />
        <TaskList />
      </div>
    </div>
  );
};

export default Overview;
