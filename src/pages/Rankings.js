import { Fragment } from "react";
import RankingsTable from "../components/Rankings/RankingsTable";
import Banner from "../components/UI/Banner";

const Rankings = () => {
  return (
    <Fragment>
      <Banner />
      <div>
        <RankingsTable />
      </div>
    </Fragment>
  );
};

export default Rankings;
