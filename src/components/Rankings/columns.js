export const COLUMNS = [
  // {
  //   Header: "Id",
  //   accessor: "id",
  // },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Wins",
    accessor: "wins",
  },
  {
    Header: "Total Fights",
    accessor: "totalFights",
  },
  {
    Header: "Win Percentage",
    accessor: "winPercent",
    Cell: ({ value }) => {
      return value + "%";
    },
  },
];
