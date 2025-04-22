"use client";

import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import CreditCardIcon from '@mui/icons-material/CreditCard';

interface StripePaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (message: string) => void;
}

export default function StripePaymentForm({ amount, onSuccess, onError }: StripePaymentFormProps) {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [name, setName] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // This would be replaced with actual Stripe integration
      // In a real implementation, we would use Stripe Elements or Checkout
      
      // Mock successful payment
      setTimeout(() => {
        onSuccess();
        setLoading(false);
      }, 1500);
      
    } catch (err) {
      onError('Payment processing failed. Please try again.');
      setLoading(false);
      console.error(err);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Format expiry as MM/YY
    const formatted = value
      .replace(/[^0-9]/g, '')
      .slice(0, 4)
      .replace(/^([0-9]{2})([0-9]{0,2})/, (_, p1, p2) => p2 ? `${p1}/${p2}` : p1);
    
    setExpiry(formatted);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Format card number with spaces every 4 digits
    const formatted = value
      .replace(/[^0-9]/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim();
    
    setCardNumber(formatted);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
        <LockIcon sx={{ mr: 1 }} /> Secure Payment
      </Typography>
      
      <Typography variant="body2" color="text.secondary" paragraph>
        Your payment information is encrypted and secure.
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Amount: ${amount.toFixed(2)}
        </Typography>
      </Box>
      
      <TextField
        label="Cardholder Name"
        fullWidth
        margin="normal"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <TextField
        label="Card Number"
        fullWidth
        margin="normal"
        required
        value={cardNumber}
        onChange={handleCardNumberChange}
        InputProps={{
          startAdornment: <CreditCardIcon sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
        placeholder="1234 5678 9012 3456"
      />
      
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Expiry Date"
          margin="normal"
          required
          value={expiry}
          onChange={handleExpiryChange}
          placeholder="MM/YY"
          sx={{ width: '50%' }}
        />
        
        <TextField
          label="CVC"
          margin="normal"
          required
          value={cvc}
          onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
          placeholder="123"
          sx={{ width: '50%' }}
        />
      </Box>
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </Button>
    </Box>
  );
}
