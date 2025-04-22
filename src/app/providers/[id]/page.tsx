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
  Avatar,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Badge
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

const ProviderProfile = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Provider Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ position: 'relative' }}>
                <Avatar 
                  src="/images/provider1.jpg" 
                  alt="Elite Cleaners"
                  sx={{ 
                    width: { xs: 120, md: 160 }, 
                    height: { xs: 120, md: 160 }, 
                    mx: { xs: 'auto', md: 0 },
                    border: '4px solid white',
                    boxShadow: 3
                  }}
                />
                <Chip 
                  icon={<VerifiedIcon />} 
                  label="Premium" 
                  color="secondary"
                  sx={{ 
                    position: 'absolute',
                    bottom: -10,
                    left: { xs: '50%', md: 20 },
                    transform: { xs: 'translateX(-50%)', md: 'none' }
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" textAlign={{ xs: 'center', md: 'left' }}>
                Elite Cleaners
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
                <Rating value={4.9} precision={0.1} readOnly />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  4.9 (243 reviews)
                </Typography>
              </Box>
              <Typography variant="body1" paragraph textAlign={{ xs: 'center', md: 'left' }}>
                <LocationOnIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                Charlotte, NC • Serving within 15 miles
              </Typography>
              <Typography variant="body1" paragraph textAlign={{ xs: 'center', md: 'left' }}>
                Professional home cleaning services with eco-friendly products and exceptional attention to detail.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' } }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  color="secondary"
                  startIcon={<MessageIcon />}
                  sx={{ mb: 2, width: { xs: '100%', md: 'auto' } }}
                >
                  Contact
                </Button>
                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  sx={{ width: { xs: '100%', md: 'auto' } }}
                >
                  Book Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Provider Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="provider tabs">
            <Tab label="Services" id="tab-0" />
            <Tab label="Reviews" id="tab-1" />
            <Tab label="Gallery" id="tab-2" />
            <Tab label="About" id="tab-3" />
          </Tabs>
        </Box>

        {/* Services Tab */}
        <Box role="tabpanel" hidden={tabValue !== 0}>
          {tabValue === 0 && (
            <Box>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Services Offered
              </Typography>
              
              <Grid container spacing={3}>
                {[
                  { 
                    title: 'Regular Home Cleaning', 
                    description: 'Comprehensive cleaning of all living areas including dusting, vacuuming, mopping, and bathroom sanitizing.', 
                    price: 'From $120', 
                    duration: '3-4 hours',
                    popular: true
                  },
                  { 
                    title: 'Deep Cleaning', 
                    description: 'Intensive cleaning service that covers hard-to-reach areas, appliances, baseboards, and more.', 
                    price: 'From $220', 
                    duration: '5-7 hours',
                    popular: false
                  },
                  { 
                    title: 'Move-In/Move-Out Cleaning', 
                    description: 'Thorough cleaning to prepare a property for new occupants or to leave it spotless when moving out.', 
                    price: 'From $250', 
                    duration: '6-8 hours',
                    popular: true
                  },
                  { 
                    title: 'Post-Construction Cleaning', 
                    description: 'Specialized cleaning to remove dust, debris, and residues after construction or renovation work.', 
                    price: 'From $300', 
                    duration: '6-10 hours',
                    popular: false
                  }
                ].map((service, index) => (
                  <Grid item xs={12} key={index}>
                    <Card sx={{ mb: 2 }}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography variant="h6" component="h3" fontWeight="bold">
                                {service.title}
                              </Typography>
                              {service.popular && (
                                <Chip 
                                  label="Popular" 
                                  color="primary" 
                                  size="small" 
                                  sx={{ ml: 2 }}
                                />
                              )}
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 1 }}>
                              {service.description}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
                                <WorkIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                                {service.duration}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between' }}>
                            <Typography variant="h6" color="primary.main" fontWeight="bold">
                              {service.price}
                            </Typography>
                            <Button 
                              variant="contained" 
                              sx={{ mt: { xs: 2, md: 0 } }}
                            >
                              Book Service
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>

        {/* Reviews Tab */}
        <Box role="tabpanel" hidden={tabValue !== 1}>
          {tabValue === 1 && (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                  Customer Reviews
                </Typography>
                <Box>
                  <Button variant="outlined">Write a Review</Button>
                </Box>
              </Box>
              
              <Box sx={{ mb: 4, p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" fontWeight="bold" color="primary.main">
                      4.9
                    </Typography>
                    <Rating value={4.9} precision={0.1} size="large" readOnly sx={{ mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Based on 243 reviews
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box sx={{ mb: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={3}>
                          <Typography variant="body2">Quality</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Rating value={5} size="small" readOnly />
                        </Grid>
                        <Grid item xs={2} textAlign="right">
                          <Typography variant="body2">5.0</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={3}>
                          <Typography variant="body2">Punctuality</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Rating value={4.8} precision={0.1} size="small" readOnly />
                        </Grid>
                        <Grid item xs={2} textAlign="right">
                          <Typography variant="body2">4.8</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={3}>
                          <Typography variant="body2">Value</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Rating value={4.7} precision={0.1} size="small" readOnly />
                        </Grid>
                        <Grid item xs={2} textAlign="right">
                          <Typography variant="body2">4.7</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={3}>
                          <Typography variant="body2">Communication</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Rating value={5} size="small" readOnly />
                        </Grid>
                        <Grid item xs={2} textAlign="right">
                          <Typography variant="body2">5.0</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              
              <Divider sx={{ mb: 4 }} />
              
              {/* Review List */}
              <List>
                {[
                  { 
                    name: 'Jennifer L.', 
                    date: 'March 15, 2025', 
                    rating: 5, 
                    comment: 'Elite Cleaners did an amazing job on my home. They were thorough, professional, and left everything spotless. I\'ve tried several cleaning services in Charlotte and they are by far the best. Will definitely be booking them again!',
                    service: 'Regular Home Cleaning',
                    verified: true
                  },
                  { 
                    name: 'Michael T.', 
                    date: 'March 3, 2025', 
                    rating: 5, 
                    comment: 'I hired Elite for a deep cleaning before hosting a family gathering. They exceeded my expectations in every way. The team was punctual, efficient, and incredibly detail-oriented. My house has never looked better!',
                    service: 'Deep Cleaning',
                    verified: true
                  },
                  { 
                    name: 'Sarah K.', 
                    date: 'February 22, 2025', 
                    rating: 4, 
                    comment: 'Very good service overall. The team was professional and did a thorough job. I gave 4 stars because they arrived about 20 minutes late, but they did call to let me know. The cleaning itself was excellent.',
                    service: 'Regular Home Cleaning',
                    verified: true
                  }
                ].map((review, index) => (
                  <React.Fragment key={index}>
                    <ListItem alignItems="flex-start" sx={{ py: 3 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {review.name.charAt(0)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {review.name}
                            </Typography>
                            {review.verified && (
                              <Chip 
                                icon={<VerifiedIcon sx={{ fontSize: '0.8rem !important' }} />} 
                                label="Verified Booking" 
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            )}
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
                              {review.date}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Rating value={review.rating} size="small" readOnly sx={{ mb: 1 }} />
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Service: {review.service}
                            </Typography>
                            <Typography variant="body1" paragraph>
                              {review.comment}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < 2 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
              
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button variant="outlined">View All Reviews</Button>
              </Box>
            </Box>
          )}
        </Box>

        {/* Gallery Tab */}
        <Box role="tabpanel" hidden={tabValue !== 2}>
          {tabValue === 2 && (
            <Box>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Service Gallery
              </Typography>
              
              <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`/images/gallery${item}.jpg`}
                        alt={`Gallery image ${item}`}
                        sx={{ bgcolor: 'grey.300' }} // Placeholder color
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Video Showcase
                </Typography>
                <Paper sx={{ p: 2, bgcolor: 'grey.100', height: 315, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography>Video content would be displayed here</Typography>
                </Paper>
              </Box>
            </Box>
          )}
        </Box>

        {/* About Tab */}
        <Box role="tabpanel" hidden={tabValue !== 3}>
          {tabValue === 3 && (
            <Box>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                About Elite Cleaners
              </Typography>
              
              <Typography variant="body1" paragraph>
                Elite Cleaners was founded in 2018 with a mission to provide exceptional cleaning services to homes and businesses in the Charlotte area. Our team consists of trained professionals who are passionate about delivering spotless results and outstanding customer service.
              </Typography>
              
              <Typography variant="body1" paragraph>
                We use eco-friendly cleaning products that are safe for your family, pets, and the environment. Our attention to detail and commitment to quality have earned us a reputation as one of the top cleaning services in the region.
              </Typography>
              
              <Box sx={{ my: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Our Credentials
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <VerifiedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        Fully Insured
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <StarIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        Top Rated on Yelp
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <PersonIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        Background Checked Staff
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              
              <Typography variant="h6" gutterBottom>
                Service Area
              </Typography>
              <Typography variant="body1" paragraph>
                We proudly serve Charlotte and surrounding areas including Cornelius, Huntersville, Matthews, Mint Hill, Pineville, and Concord. Our service radius extends approximately 15 miles from downtown Charlotte.
              </Typography>
              
              <Box sx={{ height: 300, bgcolor: 'grey.200', borderRadius: 1, mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography>Map would be displayed here</Typography>
              </Box>
              
              <Typography variant="h6" gutterBottom>
                Business Hours
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" fontWeight="bold">Monday - Friday:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <Typography variant="body2">8:00 AM - 6:00 PM</Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" fontWeight="bold">Saturday:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <Typography variant="body2">9:00 AM - 4:00 PM</Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" fontWeight="bold">Sunday:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <Typography variant="body2">Closed</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProviderProfile;
