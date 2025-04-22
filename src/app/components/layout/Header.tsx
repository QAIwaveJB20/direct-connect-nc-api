import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Container,
  useMediaQuery,
  useTheme,
  Avatar,
  Badge
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };
  
  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            LOCAL CONNECT
          </Typography>

          {/* Mobile menu */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component={Link} href="/services">Find Services</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/providers">Service Providers</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/how-it-works">How It Works</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/pricing">Pricing</MenuItem>
              </Menu>
            </>
          )}

          {/* Mobile logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            LOCAL CONNECT
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              href="/services"
              sx={{ my: 2, color: 'primary.main', display: 'block' }}
            >
              Find Services
            </Button>
            <Button
              component={Link}
              href="/providers"
              sx={{ my: 2, color: 'primary.main', display: 'block' }}
            >
              Service Providers
            </Button>
            <Button
              component={Link}
              href="/how-it-works"
              sx={{ my: 2, color: 'primary.main', display: 'block' }}
            >
              How It Works
            </Button>
            <Button
              component={Link}
              href="/pricing"
              sx={{ my: 2, color: 'primary.main', display: 'block' }}
            >
              Pricing
            </Button>
          </Box>

          {/* Search, notifications, and user menu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="primary" sx={{ ml: 1 }}>
              <SearchIcon />
            </IconButton>
            
            <IconButton color="primary" sx={{ ml: 1 }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              onClick={handleUserMenuOpen}
              color="primary"
              sx={{ ml: 1 }}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
            
            <Menu
              id="user-menu"
              anchorEl={userMenuAnchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userMenuAnchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleUserMenuClose} component={Link} href="/profile">Profile</MenuItem>
              <MenuItem onClick={handleUserMenuClose} component={Link} href="/dashboard">Dashboard</MenuItem>
              <MenuItem onClick={handleUserMenuClose} component={Link} href="/bookings">My Bookings</MenuItem>
              <MenuItem onClick={handleUserMenuClose} component={Link} href="/messages">Messages</MenuItem>
              <MenuItem onClick={handleUserMenuClose} component={Link} href="/settings">Settings</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
