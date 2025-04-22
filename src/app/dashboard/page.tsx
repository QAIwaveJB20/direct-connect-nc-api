"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid as MuiGrid,
  Paper,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';

interface Booking {
  id: string;
  serviceTitle: string;
  providerName: string;
  date: string;
  startTime: string;
  status: string;
  totalAmount: number;
}

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

export default function DashboardPage() {
  const [tabValue, setTabValue] = useState(0);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  React.useEffect(() => {
    // Mock data loading
    setTimeout(() => {
      setBookings([
        {
          id: 'booking1',
          serviceTitle: 'Professional Lawn Care Service',
          providerName: 'Green Thumb Landscaping',
          date: '2025-04-25',
          startTime: '14:00',
          status: 'confirmed',
          totalAmount: 75.00
        },
        {
          id: 'booking2',
          serviceTitle: 'House Cleaning Service',
          providerName: 'Spotless Cleaners',
          date: '2025-05-02',
          startTime: '10:00',
          status: 'pending',
          totalAmount: 120.00
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const renderBookings = () => {
    if (loading) return <Typography>Loading your bookings...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (bookings.length === 0) return <Typography>You have no bookings yet.</Typography>;

    return (
      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid item xs={12} key={booking.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6">{booking.serviceTitle}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Provider: {booking.providerName}
                    </Typography>
                    <Typography variant="body2">
                      Date: {new Date(booking.date).toLocaleDateString()} at {booking.startTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
                    <Chip 
                      label={booking.status.toUpperCase()} 
                      color={booking.status === 'confirmed' ? 'success' : 'warning'} 
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="h6">${booking.totalAmount.toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" href={`/booking/${booking.id}`}>View Details</Button>
                {booking.status === 'pending' && (
                  <Button size="small" color="error">Cancel</Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderProviderDashboard = () => {
    return (
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>Provider Dashboard</Typography>
        <Typography paragraph>
          You haven't registered as a service provider yet. Become a provider to offer your services on our platform.
        </Typography>
        <Button variant="contained" href="/provider/register">Become a Provider</Button>
      </Paper>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
          <Tab label="My Bookings" />
          <Tab label="Provider Dashboard" />
          <Tab label="Account Settings" />
        </Tabs>
      </Paper>
      
      {tabValue === 0 && (
        <Box>
          <Typography variant="h5" gutterBottom>My Bookings</Typography>
          {renderBookings()}
        </Box>
      )}
      
      {tabValue === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom>Provider Dashboard</Typography>
          {renderProviderDashboard()}
        </Box>
      )}
      
      {tabValue === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom>Account Settings</Typography>
          <Paper sx={{ p: 3 }}>
            <Typography paragraph>
              Manage your account settings, payment methods, and notification preferences.
            </Typography>
            <Button variant="contained">Edit Profile</Button>
          </Paper>
        </Box>
      )}
    </Container>
  );
}
