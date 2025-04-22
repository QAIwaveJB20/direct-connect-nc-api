"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Paper, 
  Grid as MuiGrid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Divider,
  Alert
} from '@mui/material';
import { format } from 'date-fns';
import StripePaymentForm from '../../components/StripePaymentForm';

const steps = ['Service Details', 'Select Date & Time', 'Payment'];

interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  providerId: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
}

interface ProviderDetails {
  id: string;
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  profileImage: string;
  rating: number;
  reviewCount: number;
  verificationLevel: string;
}

interface BookingData {
  date: string | null;
  startTime: string | null;
  endTime: string | null;
  location: string;
  notes: string;
  paymentMethod: string;
}

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

export default function BookingPage({ params }: { params: { id: string } }) {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    startTime: null,
    endTime: null,
    location: '',
    notes: '',
    paymentMethod: 'credit_card'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails | null>(null);
  const [providerDetails, setProviderDetails] = useState<ProviderDetails | null>(null);

  // Fetch service details
  React.useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        // This would be replaced with actual API call
        // const response = await fetch(`/api/services/${params.id}`);
        // const data = await response.json();
        
        // Mock data for now
        const mockService: ServiceDetails = {
          id: params.id,
          title: 'Professional Lawn Care Service',
          description: 'Complete lawn maintenance including mowing, edging, and cleanup.',
          price: 75.00,
          duration: 60, // minutes
          providerId: 'provider123',
          category: 'Lawn & Garden',
          images: ['https://example.com/lawn1.jpg'],
          rating: 4.8,
          reviewCount: 24
        };
        
        const mockProvider: ProviderDetails = {
          id: 'provider123',
          businessName: 'Green Thumb Landscaping',
          businessPhone: '(704) 555-1234',
          businessEmail: 'contact@greenthumb.com',
          address: '123 Main St',
          city: 'Cornelius',
          state: 'NC',
          zipCode: '28031',
          profileImage: 'https://example.com/provider.jpg',
          rating: 4.9,
          reviewCount: 87,
          verificationLevel: 'premium'
        };
        
        setServiceDetails(mockService);
        setProviderDetails(mockProvider);
      } catch (err) {
        setError('Failed to load service details');
        console.error(err);
      }
    };
    
    fetchServiceDetails();
  }, [params.id]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData({
      ...bookingData,
      [field]: value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
      // This would be replaced with actual API call
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     serviceId: params.id,
      //     providerId: serviceDetails.providerId,
      //     ...bookingData
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Failed to create booking');
      // const data = await response.json();
      
      // Mock successful booking
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1500);
      
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      setLoading(false);
      console.error(err);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            {serviceDetails && providerDetails ? (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">{serviceDetails.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Provided by {providerDetails.businessName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Price:</strong> ${serviceDetails.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Duration:</strong> {serviceDetails.duration} minutes
                  </Typography>
                  <Typography variant="body1">
                    <strong>Category:</strong> {serviceDetails.category}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Provider Rating:</strong> {providerDetails.rating} ({providerDetails.reviewCount} reviews)
                  </Typography>
                  <Typography variant="body1">
                    <strong>Location:</strong> {providerDetails.city}, {providerDetails.state}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Verification:</strong> {providerDetails.verificationLevel.charAt(0).toUpperCase() + providerDetails.verificationLevel.slice(1)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{serviceDetails.description}</Typography>
                </Grid>
              </Grid>
            ) : (
              <Typography>Loading service details...</Typography>
            )}
          </Paper>
        );
      
      case 1:
        return (
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Select Date and Time
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Start Time"
                  type="time"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => handleInputChange('startTime', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Service Location"
                  fullWidth
                  required
                  value={bookingData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter the address where service will be performed"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Additional Notes"
                  fullWidth
                  multiline
                  rows={4}
                  value={bookingData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any special instructions or details the provider should know"
                />
              </Grid>
            </Grid>
          </Paper>
        );
      
      case 2:
        return (
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Payment Details
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">Booking Summary</Typography>
                  <Typography>
                    <strong>Service:</strong> {serviceDetails?.title}
                  </Typography>
                  <Typography>
                    <strong>Provider:</strong> {providerDetails?.businessName}
                  </Typography>
                  <Typography>
                    <strong>Date:</strong> {bookingData.date || 'Not selected'}
                  </Typography>
                  <Typography>
                    <strong>Time:</strong> {bookingData.startTime || 'Not selected'}
                  </Typography>
                  <Typography>
                    <strong>Location:</strong> {bookingData.location}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h6">
                  Total: ${serviceDetails?.price.toFixed(2)}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
              </Grid>
              
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <Typography variant="subtitle1">Payment Method</Typography>
                  <StripePaymentForm 
                    amount={serviceDetails?.price || 0}
                    onSuccess={() => setSuccess(true)}
                    onError={(msg: string) => setError(msg)}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        );
      
      default:
        return null;
    }
  };

  if (success) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Booking Confirmed!
          </Typography>
          <Typography variant="body1" paragraph>
            Your booking has been successfully created. You will receive a confirmation email shortly.
          </Typography>
          <Typography variant="body1" paragraph>
            Booking details:
            <br />
            Service: {serviceDetails?.title}
            <br />
            Provider: {providerDetails?.businessName}
            <br />
            Date: {bookingData.date || 'Not selected'}
            <br />
            Time: {bookingData.startTime || 'Not selected'}
          </Typography>
          <Button variant="contained" color="primary" href="/dashboard">
            Go to Dashboard
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Book a Service
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {renderStepContent(activeStep)}
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {activeStep !== 0 && (
            <Button
              onClick={handleBack}
              sx={{ mt: 3, ml: 1 }}
              disabled={loading}
            >
              Back
            </Button>
          )}
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, ml: 1 }}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Confirm Booking'}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
