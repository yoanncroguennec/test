"use client";
import React, { useEffect, useState } from "react";
import DataTable from "@/app/components/dataTable";
import { Box, Typography } from "@mui/material";

const cols = ["ID", "TITLE", "DESCRIPTION", "PRICE"];

const AllProducts = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      try {
        const res = await fetch("/api/");
        if (!res.ok) {
          throw new Error("Error fetching products");
        }

        const { products } = await res.json();
        setRows(products);
      } catch (error) {
        console.log("Error fetching products");
      }
    }
    getAllProducts();
  }, []);

  return (
    <Box>
      {rows.map((tr, i) => (
        <Box key={i}>
          <Typography variant='h5'>{tr?.title}</Typography>
        </Box>
      ))}
    </Box>
  );
  return <DataTable cols={cols} rows={rows} />;
};

export default AllProducts;
