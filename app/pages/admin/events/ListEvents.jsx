"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ListEvents() {
    const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    async function getAllEvents() {
      try {
        const res = await fetch("/api/events/all");
        if (!res.ok) {
          throw new Error("Error fetching events");
        }

        const { events } = await res.json();
        setAllEvents(events);
      } catch (error) {
        console.log("Error fetching events");
      }
    }

    getAllEvents();
  }, []);

  return (
    <div>
      <Link href='../add/events'>
        <Typography variant='h5'>Ajout</Typography>
      </Link>
      ListEvents
      {allEvents.map((yy) => (
        <Box>
          <Typography variant='h5'>{yy.event}</Typography>
        </Box>
      ))}
    </div>
  );
}
