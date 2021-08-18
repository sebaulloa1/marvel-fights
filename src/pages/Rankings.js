import { Fragment } from "react";
import RankingsTable from "../components/Rankings/RankingsTable";
import Banner from "../components/UI/Banner";

const Rankings = () => {
  return (
    <Fragment>
      <Banner />

      <RankingsTable />
    </Fragment>
  );
};

export default Rankings;
