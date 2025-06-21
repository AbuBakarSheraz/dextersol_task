import React from 'react';
import Navbar from './Navbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import search from '../assets/icons/search.svg';
import phone from '../assets/icons/phone.svg';
import language from '../assets/icons/language.svg';
import chat from '../assets/icons/chat.svg';
import profile from '../assets/icons/profile.svg';

// Custom styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#2D53A4',
  boxShadow: 'none',
  borderBottom: '1px solid #454545',  // ✅ add this line
}));


const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)',
  },
}));

const IconImage = styled('img')(({ theme }) => ({
  width: 20,
  height: 20,
  display: 'block',
}));

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          py: isMobile ? 1.25 : 1.75, // py-2.5 md:py-3.5
          px: isMobile ? 2 : 4, // px-4 md:px-8
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <StyledIconButton
            aria-label="Search"
            size="small"
          >
            <IconImage src={search} alt="" />
          </StyledIconButton>
          
          <StyledIconButton
            aria-label="Phone"
            size="small"
          >
            <IconImage src={phone} alt="" />
          </StyledIconButton>
          
          <StyledIconButton
            aria-label="Language settings"
            size="small"
          >
            <IconImage src={language} alt="" />
            <ArrowDropDownIcon className='text-white'/>
          </StyledIconButton>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <StyledIconButton
            aria-label="Chat"
            size="small"
          >
            <IconImage src={chat} alt="" />
          </StyledIconButton>
          
          <StyledIconButton
            aria-label="User profile"
            size="small"
          >
            <IconImage src={profile} alt="" />
          </StyledIconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
    <Navbar />
    

    </>
  );
}

export default Header;