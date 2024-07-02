"use client";

import React from "react";
import AllProducts from "./components/all-products";
import { Box, Typography } from '@mui/material';
import Link from "next/link";
import ListEvents from "./pages/admin/events/ListEvents";

export default function Home() {
  return (
    <Box>
      <Box>
        <Link href='../add/'>
          <Typography variant='h5'>Ajout</Typography>
        </Link>
      </Box>
      <Box>
        <AllProducts />
        <hr />
        <hr />
        <hr />
        <hr />
        <ListEvents />
      </Box>
    </Box>
  );
}

