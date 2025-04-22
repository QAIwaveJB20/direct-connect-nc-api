"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Box>
          <Container maxWidth="lg">
            {children}
          </Container>
        </Box>
      </body>
    </html>
  );
}
