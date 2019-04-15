import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

// let id = 0;
// function createData(type, firstName, lastName, score) {
//   id += 1;
//   return { id, type, firstName, lastName, score };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24),
//   createData("Ice cream sandwich", 237, 9.0, 37),
//   createData("Eclair", 262, 16.0, 24),
//   createData("Cupcake", 305, 3.7, 67),
//   createData("Gingerbread", 356, 16.0, 49)
// ];

// function CustomizedTable(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <CustomTableCell>Member Of</CustomTableCell>
//             <CustomTableCell align="right">First Name</CustomTableCell>
//             <CustomTableCell align="right">Last Name</CustomTableCell>
//             <CustomTableCell align="right"> Score</CustomTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow className={classes.row} key={row.id}>
//               <CustomTableCell component="th" scope="row">
//                 {row.name}
//               </CustomTableCell>
//               <CustomTableCell align="right">{row.calories}</CustomTableCell>
//               <CustomTableCell align="right">{row.fat}</CustomTableCell>
//               <CustomTableCell align="right">{row.carbs}</CustomTableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }
class CustomizedTable extends React.Component {
  render() {
    console.log(this.props.scores);
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Member Of</CustomTableCell>
              <CustomTableCell align="right">First Name</CustomTableCell>
              <CustomTableCell align="right">Last Name</CustomTableCell>
              <CustomTableCell align="right"> Score</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.scores.map(score => (
              <TableRow className={classes.score} key={score._id}>
                <CustomTableCell component="th" scope="row">
                  {score.type}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.firstName}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.lastName}
                </CustomTableCell>
                <CustomTableCell align="right">{score.score}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);