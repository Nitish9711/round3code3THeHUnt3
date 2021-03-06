import React from "react";
import InputField from "./InputField";
import { useMediaQuery } from "react-responsive";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: "Theme") =>
  createStyles({
    root: {
      backgroundColor: "#272c34",
      color: "white",
    },
  })
)(TableRow);

function createData(name: string, calories: string) {
  return { name, calories };
}

const rows = [
  createData("6Q18C18W14L5T", "FORERUNNER"),
  createData("7T5L1F5", "GRENADE"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const Content = () => {
  const classes = useStyles();

  const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div
      className="Content"
      style={{
        width: isPortrait ? "90%" : "70%",
      }}
    >
      <h1>Grenade</h1>
      <p>
        While doing recon at a Banished outpost, Chief finds a grenade cache,
        with a lot of grenades just lying about. The cache contains 20 plasma
        grenades, which are blue, and 14 spike grenades, which are red. He wants
        to take some grenades, but then decides to leave some behind to create a
        distraction to help him leave. But, since they are explosives, he can
        only take them out 2 at a time. If the grenades are of different types,
        he adds a spike grenade to the cache. If they are of same type, he adds
        a plasma grenade to the bag. When he takes out 2 grenades from the
        cache, he doesn’t put them back in, which means that, the number of
        grenades in the cache keeps decreasing. What will be the colour of the
        last grenade in the cache?
        <br />
        <br />
      </p>

      
      <br />

      <InputField />
    </div>
  );
};

export default Content;
