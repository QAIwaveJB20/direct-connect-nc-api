"use client";

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid as MuiGrid,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  TextField
} from '@mui/material';

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  color: string;
  buttonColor: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  recommended?: boolean;
}

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      interval: 'month',
      features: [
        'Basic verification badge',
        'Appear in search results',
        'Accept bookings',
        '5% transaction fee',
        'Email support'
      ],
      color: '#f5f5f5',
      buttonColor: 'primary'
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 29.99,
      interval: 'month',
      features: [
        'Business verification badge',
        'Priority in search results',
        'Accept bookings',
        '3.5% transaction fee',
        'Phone & email support',
        'Custom business page',
        'Upload up to 10 photos'
      ],
      color: '#e3f2fd',
      buttonColor: 'primary',
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 49.99,
      interval: 'month',
      features: [
        'Premium verification badge',
        'Featured in search results',
        'Accept bookings',
        '2% transaction fee',
        'Priority support',
        'Custom business page',
        'Upload unlimited photos',
        'Video showcase',
        'Promotional offers feature',
        'Analytics dashboard'
      ],
      color: '#e8f5e9',
      buttonColor: 'primary'
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    
    setLoading(true);
    setError('');
    
    try {
      // This would be replaced with actual API call
      // const response = await fetch('/api/subscriptions', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     plan: selectedPlan,
      //     interval: 'monthly'
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Failed to create subscription');
      // const data = await response.json();
      
      // Mock successful subscription
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1500);
      
    } catch (err) {
      setError('Failed to create subscription. Please try again.');
      setLoading(false);
      console.error(err);
    }
  };

  if (success) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Subscription Confirmed!
          </Typography>
          <Typography variant="body1" paragraph>
            Your subscription has been successfully activated. You can now enjoy all the benefits of your selected plan.
          </Typography>
          <Typography variant="body1" paragraph>
            Plan: {plans.find(p => p.id === selectedPlan)?.name}
          </Typography>
          <Button variant="contained" color="primary" href="/dashboard">
            Go to Dashboard
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Premium Provider Plans
      </Typography>
      <Typography variant="subtitle1" paragraph align="center">
        Boost your visibility and grow your business with our premium plans
      </Typography>
      
      {error && (
        <Box sx={{ mb: 3 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.id}>
            <Card 
              elevation={selectedPlan === plan.id ? 8 : 2} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: plan.color,
                border: selectedPlan === plan.id ? '2px solid #1976d2' : 'none',
                position: 'relative'
              }}
            >
              {plan.recommended && (
                <Chip 
                  label="RECOMMENDED" 
                  color="primary" 
                  sx={{ 
                    position: 'absolute', 
                    top: -12, 
                    right: 20,
                    fontWeight: 'bold'
                  }} 
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h4" component="div" gutterBottom>
                  ${plan.price}
                  <Typography variant="subtitle1" component="span" color="text.secondary">
                    /{plan.interval}
                  </Typography>
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List dense>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText primary={`✓ ${feature}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button 
                  fullWidth 
                  variant={selectedPlan === plan.id ? "contained" : "outlined"} 
                  color={plan.buttonColor}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          size="large" 
          disabled={!selectedPlan || loading}
          onClick={handleSubscribe}
        >
          {loading ? "Processing..." : "Subscribe Now"}
        </Button>
      </Box>
      
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Why Upgrade to Premium?
        </Typography>
        <Typography paragraph>
          As a premium provider on Direct Connect NC, you'll enjoy increased visibility, lower transaction fees, and exclusive features that help you stand out from the competition. Our premium plans are designed to help you grow your business and provide the best service to your customers.
        </Typography>
        <Typography>
          All plans include our secure payment processing, booking management system, and customer messaging platform. Upgrade today to take your business to the next level!
        </Typography>
      </Paper>
    </Container>
  );
}
