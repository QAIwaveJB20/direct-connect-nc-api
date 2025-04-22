"use client";

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid as MuiGrid,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Alert,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SelectChangeEvent
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

interface VerificationLevel {
  id: string;
  name: string;
  description: string;
  price: number;
  documents: string[];
  icon: React.ReactNode;
  color: string;
}

export default function VerificationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [verificationLevel, setVerificationLevel] = useState('');
  const [documents, setDocuments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const steps = ['Select Verification Level', 'Upload Documents', 'Submit for Review'];

  const verificationLevels: VerificationLevel[] = [
    {
      id: 'basic',
      name: 'Basic Verification',
      description: 'Verify your identity and basic business information',
      price: 0,
      documents: ['Government-issued ID', 'Proof of address'],
      icon: <VerifiedIcon fontSize="large" />,
      color: '#e3f2fd'
    },
    {
      id: 'business',
      name: 'Business Verification',
      description: 'Verify your business credentials and licenses',
      price: 29.99,
      documents: ['Business license', 'Professional certification', 'Insurance proof'],
      icon: <SecurityIcon fontSize="large" />,
      color: '#e8f5e9'
    },
    {
      id: 'premium',
      name: 'Premium Verification',
      description: 'Complete verification with background check',
      price: 49.99,
      documents: ['Business license', 'Professional certification', 'Insurance proof', 'Background check consent'],
      icon: <CheckCircleIcon fontSize="large" />,
      color: '#fff8e1'
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleVerificationLevelChange = (event: SelectChangeEvent) => {
    setVerificationLevel(event.target.value);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setDocuments([...documents, ...files]);
    }
  };

  const handleRemoveDocument = (index: number) => {
    const newDocuments = [...documents];
    newDocuments.splice(index, 1);
    setDocuments(newDocuments);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
      // This would be replaced with actual API call
      // const formData = new FormData();
      // formData.append('verificationLevel', verificationLevel);
      // documents.forEach((doc, index) => {
      //   formData.append(`document_${index}`, doc);
      // });
      
      // const response = await fetch('/api/verification/submit', {
      //   method: 'POST',
      //   body: formData
      // });
      
      // if (!response.ok) throw new Error('Failed to submit verification');
      // const data = await response.json();
      
      // Mock successful submission
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1500);
      
    } catch (err) {
      setError('Failed to submit verification. Please try again.');
      setLoading(false);
      console.error(err);
    }
  };

  const getSelectedLevel = (): VerificationLevel | undefined => {
    return verificationLevels.find(level => level.id === verificationLevel);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            {verificationLevels.map((level) => (
              <Grid item xs={12} md={4} key={level.id}>
                <Card 
                  elevation={verificationLevel === level.id ? 8 : 2} 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    backgroundColor: level.color,
                    border: verificationLevel === level.id ? '2px solid #1976d2' : 'none'
                  }}
                  onClick={() => setVerificationLevel(level.id)}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {level.icon}
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {level.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {level.description}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                      {level.price === 0 ? 'Free' : `$${level.price}`}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                      Required Documents:
                    </Typography>
                    <List dense>
                      {level.documents.map((doc, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={doc} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button 
                      fullWidth 
                      variant={verificationLevel === level.id ? "contained" : "outlined"} 
                      color="primary"
                      onClick={() => setVerificationLevel(level.id)}
                    >
                      {verificationLevel === level.id ? "Selected" : "Select"}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        );
      
      case 1:
        const selectedLevel = getSelectedLevel();
        return (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Upload Required Documents for {selectedLevel?.name}
            </Typography>
            <Typography paragraph>
              Please upload the following documents. All files must be in JPG, PNG, or PDF format and less than 10MB.
            </Typography>
            
            <List>
              {selectedLevel?.documents.map((doc, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={doc} />
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ mt: 3, mb: 3 }}>
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadFileIcon />}
              >
                Upload Documents
                <input
                  type="file"
                  hidden
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileUpload}
                />
              </Button>
            </Box>
            
            {documents.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Uploaded Documents:
                </Typography>
                <List dense>
                  {documents.map((doc, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={doc.name} secondary={`${(doc.size / 1024 / 1024).toFixed(2)} MB`} />
                      <Button color="error" onClick={() => handleRemoveDocument(index)}>
                        Remove
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Paper>
        );
      
      case 2:
        const level = getSelectedLevel();
        return (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Review and Submit
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">Verification Level:</Typography>
                <Typography variant="body1">{level?.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">Fee:</Typography>
                <Typography variant="body1">{level?.price === 0 ? 'Free' : `$${level?.price}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Uploaded Documents ({documents.length}):</Typography>
                <List dense>
                  {documents.map((doc, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText primary={doc.name} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  By submitting, you confirm that all provided documents are authentic and accurate. 
                  Verification typically takes 1-3 business days to process.
                </Typography>
                {level && level.price > 0 && (
                  <Typography variant="body2" paragraph>
                    Your payment method will be charged ${level.price} upon submission.
                  </Typography>
                )}
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
            Verification Submitted!
          </Typography>
          <Typography variant="body1" paragraph>
            Your verification documents have been successfully submitted for review. Our team will review your documents and update your verification status within 1-3 business days.
          </Typography>
          <Typography variant="body1" paragraph>
            You will receive an email notification once the verification process is complete.
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
      <Typography variant="h4" gutterBottom>
        Provider Verification
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Verify your identity and business to build trust with customers and unlock premium features
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
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
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          {activeStep !== 0 && (
            <Button
              onClick={handleBack}
              sx={{ mr: 1 }}
              disabled={loading}
            >
              Back
            </Button>
          )}
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={loading || documents.length === 0}
            >
              {loading ? 'Submitting...' : 'Submit Verification'}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={(activeStep === 0 && !verificationLevel) || (activeStep === 1 && documents.length === 0)}
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Why Get Verified?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <VerifiedIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Build Trust
              </Typography>
              <Typography variant="body2">
                Verified providers receive 3x more bookings on average. Show customers you're a legitimate business they can trust.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <SecurityIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Enhanced Visibility
              </Typography>
              <Typography variant="body2">
                Verified providers appear higher in search results and receive a verification badge on their profile.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <CheckCircleIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Lower Fees
              </Typography>
              <Typography variant="body2">
                Verified providers enjoy lower transaction fees and access to premium features like promotional tools.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
