import React from "react";
import product, { type PRODUCT } from "@/data/product";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import Table from "@mui/material/Table";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
  return (
    <TableContainer sx={{ maxHeight: "100vh" }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Adjective</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Material</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Offerprice</TableCell>
            <TableCell align="right">Checked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row: PRODUCT, dataid) => (
            <TableRow
              key={row.id}
              sx={{
                border: "0px solid transparent",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {dataid + 1}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.owner}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.adjective}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.material}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.offerprice}</TableCell>
              <TableCell align="right">
                {(row.checked && <DoneAllIcon sx={{ color: "green" }} />) || (
                  <RemoveDoneIcon sx={{ color: "red" }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
