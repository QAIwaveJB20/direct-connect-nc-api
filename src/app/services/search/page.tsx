"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid as MuiGrid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Pagination,
  Chip,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

// Create a simpler Grid component to avoid TypeScript errors
const Grid = (props: any) => {
  return <MuiGrid {...props} />;
};

interface ServiceResult {
  id: string;
  title: string;
  providerName: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  verified: boolean;
  featured: boolean;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [rating, setRating] = useState<number>(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchResults, setSearchResults] = useState<ServiceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Mock categories
  const categories = [
    'Home Cleaning',
    'Lawn & Garden',
    'Handyman',
    'Plumbing',
    'Electrical',
    'HVAC',
    'Painting',
    'Moving',
    'Pet Care',
    'Computer Repair'
  ];

  // Mock search function
  const handleSearch = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock search results
      const results: ServiceResult[] = [
        {
          id: 'service1',
          title: 'Professional Lawn Care Service',
          providerName: 'Green Thumb Landscaping',
          category: 'Lawn & Garden',
          price: 75,
          rating: 4.8,
          reviewCount: 24,
          location: 'Cornelius, NC',
          image: 'https://example.com/lawn1.jpg',
          verified: true,
          featured: true
        },
        {
          id: 'service2',
          title: 'House Cleaning Service',
          providerName: 'Spotless Cleaners',
          category: 'Home Cleaning',
          price: 120,
          rating: 4.6,
          reviewCount: 42,
          location: 'Cornelius, NC',
          image: 'https://example.com/cleaning1.jpg',
          verified: true,
          featured: false
        },
        {
          id: 'service3',
          title: 'Handyman Services',
          providerName: 'Fix-It-All',
          category: 'Handyman',
          price: 65,
          rating: 4.5,
          reviewCount: 18,
          location: 'Davidson, NC',
          image: 'https://example.com/handyman1.jpg',
          verified: false,
          featured: false
        },
        {
          id: 'service4',
          title: 'Plumbing Repair',
          providerName: 'Reliable Plumbing',
          category: 'Plumbing',
          price: 95,
          rating: 4.7,
          reviewCount: 31,
          location: 'Huntersville, NC',
          image: 'https://example.com/plumbing1.jpg',
          verified: true,
          featured: false
        }
      ];
      
      // Filter results based on search criteria
      let filteredResults = [...results];
      
      if (searchQuery) {
        filteredResults = filteredResults.filter(
          item => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 item.providerName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      if (category) {
        filteredResults = filteredResults.filter(item => item.category === category);
      }
      
      if (location) {
        filteredResults = filteredResults.filter(item => item.location.toLowerCase().includes(location.toLowerCase()));
      }
      
      if (priceRange[0] > 0 || priceRange[1] < 500) {
        filteredResults = filteredResults.filter(
          item => item.price >= priceRange[0] && item.price <= priceRange[1]
        );
      }
      
      if (rating > 0) {
        filteredResults = filteredResults.filter(item => item.rating >= rating);
      }
      
      if (verifiedOnly) {
        filteredResults = filteredResults.filter(item => item.verified);
      }
      
      // Sort featured items first
      filteredResults.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
      
      setSearchResults(filteredResults);
      setTotalPages(Math.ceil(filteredResults.length / 4) || 1);
      setLoading(false);
    }, 1000);
  };

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Handle price range change
  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    return searchResults.slice(startIndex, endIndex);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Find Local Services
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="What service do you need?"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. lawn care, cleaning"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Cornelius, NC"
              InputProps={{
                startAdornment: <LocationOnIcon color="action" sx={{ mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSearch}
              disabled={loading}
              startIcon={<SearchIcon />}
            >
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Price Range</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                step={10}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">${priceRange[0]}</Typography>
                <Typography variant="body2">${priceRange[1]}</Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Minimum Rating</Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  <MenuItem value={0}>Any Rating</MenuItem>
                  <MenuItem value={3}>3+ Stars</MenuItem>
                  <MenuItem value={4}>4+ Stars</MenuItem>
                  <MenuItem value={4.5}>4.5+ Stars</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                    />
                  }
                  label="Verified Providers Only"
                />
              </FormGroup>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleSearch}
                disabled={loading}
              >
                Apply Filters
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={9}>
          {loading ? (
            <Typography>Searching for services...</Typography>
          ) : searchResults.length === 0 ? (
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">No services found</Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search criteria or filters
              </Typography>
            </Paper>
          ) : (
            <>
              <Typography variant="subtitle1" gutterBottom>
                {searchResults.length} services found
              </Typography>
              
              <Grid container spacing={3}>
                {getCurrentPageItems().map((service) => (
                  <Grid item xs={12} sm={6} key={service.id}>
                    <Card sx={{ position: 'relative' }}>
                      {service.featured && (
                        <Chip
                          label="FEATURED"
                          color="primary"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            zIndex: 1
                          }}
                        />
                      )}
                      <CardActionArea href={`/providers/${service.id}`}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://source.unsplash.com/random/?service"
                          alt={service.title}
                        />
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {service.providerName}
                            {service.verified && (
                              <Chip
                                label="Verified"
                                color="success"
                                size="small"
                                sx={{ ml: 1 }}
                              />
                            )}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
                            <Typography variant="body2" component="span">
                              {service.rating} ({service.reviewCount} reviews)
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOnIcon fontSize="small" /> {service.location}
                            </Typography>
                            <Typography variant="h6" color="primary">
                              ${service.price}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
