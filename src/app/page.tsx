"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid as MuiGrid, 
  Card, 
  CardContent, 
  CardMedia, 
  Rating, 
  Chip,
  TextField,
  InputAdornment,
  Paper,
  Divider,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import CategoryIcon from '@mui/icons-material/Category';

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 8,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                Local Services, Delivered With Trust
              </Typography>
              <Typography variant="h5" paragraph>
                Connect with verified local professionals for all your service needs
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}
                >
                  <InputAdornment position="start" sx={{ pl: 2 }}>
                    <SearchIcon />
                  </InputAdornment>
                  <TextField
                    fullWidth
                    placeholder="What service do you need?"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  />
                </Paper>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputAdornment position="start" sx={{ pl: 2 }}>
                    <LocationOnIcon />
                  </InputAdornment>
                  <TextField
                    fullWidth
                    placeholder="Your location"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  />
                </Paper>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ mt: 2, bgcolor: 'secondary.main', color: 'white', px: 4, py: 1.5 }}
                >
                  Find Services
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ position: 'relative', height: '400px' }}>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: '10%', 
                    right: '10%',
                    bgcolor: 'white', 
                    borderRadius: 2,
                    p: 2,
                    boxShadow: 3,
                    maxWidth: '250px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ mr: 1 }}>J</Avatar>
                    <Typography variant="subtitle1" fontWeight="bold">John D.</Typography>
                    <VerifiedIcon color="primary" sx={{ ml: 1, fontSize: 18 }} />
                  </Box>
                  <Typography variant="body2" paragraph>
                    "Found an amazing plumber in minutes. Verified profile gave me peace of mind!"
                  </Typography>
                  <Rating value={5} size="small" readOnly />
                </Box>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    bottom: '10%', 
                    left: '10%',
                    bgcolor: 'white', 
                    borderRadius: 2,
                    p: 2,
                    boxShadow: 3,
                    maxWidth: '250px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ mr: 1 }}>S</Avatar>
                    <Typography variant="subtitle1" fontWeight="bold">Sarah M.</Typography>
                    <VerifiedIcon color="primary" sx={{ ml: 1, fontSize: 18 }} />
                  </Box>
                  <Typography variant="body2" paragraph>
                    "As a handyman, I've doubled my client base since joining. Worth every penny!"
                  </Typography>
                  <Rating value={5} size="small" readOnly />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust Badges Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={4}>
            <Box>
              <VerifiedIcon color="primary" sx={{ fontSize: 48 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Verified Providers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every service provider undergoes our rigorous verification process
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <StarIcon color="primary" sx={{ fontSize: 48 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Secure Payments
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Funds held in escrow until you're satisfied with the service
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <CategoryIcon color="primary" sx={{ fontSize: 48 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Smart Matching
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our AI connects you with the perfect provider for your needs
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Popular Services Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
            Popular Services
          </Typography>
          <Typography variant="subtitle1" paragraph textAlign="center" sx={{ mb: 4 }}>
            Discover the most requested services in your area
          </Typography>
          
          <Grid container spacing={3}>
            {[
              { title: 'Home Cleaning', image: '/images/cleaning.jpg', rating: 4.8, count: 1243 },
              { title: 'Handyman', image: '/images/handyman.jpg', rating: 4.7, count: 987 },
              { title: 'Lawn Care', image: '/images/lawn.jpg', rating: 4.9, count: 756 },
              { title: 'Plumbing', image: '/images/plumbing.jpg', rating: 4.6, count: 1102 }
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.image}
                    alt={service.title}
                    sx={{ bgcolor: 'grey.300' }} // Placeholder color
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {service.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={service.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {service.rating} ({service.count})
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Starting at $25/hr
                      </Typography>
                      <Chip 
                        size="small" 
                        label="Popular" 
                        color="primary" 
                        variant="outlined" 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" size="large">
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Providers Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
          Top-Rated Service Providers
        </Typography>
        <Typography variant="subtitle1" paragraph textAlign="center" sx={{ mb: 4 }}>
          Professionals with exceptional ratings and reviews
        </Typography>
        
        <Grid container spacing={3}>
          {[
            { name: 'Elite Cleaners', image: '/images/provider1.jpg', service: 'Home Cleaning', rating: 4.9, verified: true, premium: true },
            { name: 'Mike\'s Handyman', image: '/images/provider2.jpg', service: 'Handyman', rating: 4.8, verified: true, premium: false },
            { name: 'Green Thumb Lawn', image: '/images/provider3.jpg', service: 'Lawn Care', rating: 4.9, verified: true, premium: true },
            { name: 'Quick Fix Plumbing', image: '/images/provider4.jpg', service: 'Plumbing', rating: 4.7, verified: true, premium: false }
          ].map((provider, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={provider.image}
                    alt={provider.name}
                    sx={{ bgcolor: 'grey.300' }} // Placeholder color
                  />
                  {provider.premium && (
                    <Chip 
                      label="Premium" 
                      color="secondary" 
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 10, 
                        right: 10,
                        fontWeight: 'bold'
                      }} 
                    />
                  )}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {provider.name}
                    </Typography>
                    {provider.verified && (
                      <VerifiedIcon color="primary" sx={{ ml: 1, fontSize: 18 }} />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {provider.service}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={provider.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {provider.rating}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOnIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                      5 miles away
                    </Typography>
                    <Button size="small" variant="outlined">
                      View
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" size="large">
            View All Providers
          </Button>
        </Box>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
            How It Works
          </Typography>
          <Typography variant="subtitle1" paragraph textAlign="center" sx={{ mb: 4 }}>
            Simple steps to get your service needs fulfilled
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  1
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Search for a Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse categories or search for the specific service you need in your area
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  2
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Book a Provider
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Compare verified providers, check reviews, and book your appointment
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  3
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Get Service & Pay
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Receive your service and pay securely through our platform
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" size="large" color="primary">
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Join as Provider CTA */}
      <Box 
        sx={{ 
          py: 8,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/provider-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
            Are You a Service Provider?
          </Typography>
          <Typography variant="subtitle1" paragraph textAlign="center" sx={{ mb: 4 }}>
            Join our platform to grow your business and connect with new customers
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.light" fontWeight="bold">
                  2x
                </Typography>
                <Typography variant="body1">
                  Average business growth for providers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.light" fontWeight="bold">
                  $1.2k
                </Typography>
                <Typography variant="body1">
                  Average monthly earnings
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.light" fontWeight="bold">
                  10k+
                </Typography>
                <Typography variant="body1">
                  Active customers in your area
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'secondary.main', 
                color: 'white', 
                px: 4, 
                py: 1.5,
                '&:hover': {
                  bgcolor: 'secondary.dark'
                }
              }}
            >
              Become a Provider
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
