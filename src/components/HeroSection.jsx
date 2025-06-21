import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import heroimage from '../assets/images/hero-image.png';
import rect1 from '../assets/images/blue-rect.png';
import rect2 from '../assets/images/gray-rect.png';

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    gap: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    gap: theme.spacing(2),
    marginTop: theme.spacing(8),
  },
}));

const DecorativeContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('xl')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    flexShrink: 0,
    marginTop: theme.spacing(16),
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: 'none',
  marginTop: theme.spacing(5),
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.breakpoints.values.md,
    textAlign: 'left',
  },
}));

const TextContentContainer = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(2),
  marginTop: 0,
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(3.6),
  },
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: 1.6,
  letterSpacing: 'normal',
  color: '#BFDBFE', // blue-200 equivalent
  maxWidth: '100%',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    lineHeight: 1.4,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '58px',
    maxWidth: '436px',
    margin: 0,
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: 1.2,
  color: 'white',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    fontSize: '28px',
    lineHeight: 1.3,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '28px',
    lineHeight: '50px',
    margin: 0,
  },
}));

const HeroImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end', // Changed from 'center' to 'flex-end' for right alignment
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(0), // Added right padding
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(0), // Added right padding for tablets
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const HeroImage = styled('img')(({ theme }) => ({
  width: '356px', // Increased from 256px by 100px
  height: 'auto',
  objectFit: 'contain',
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    width: '420px', // Increased from 320px by 100px
  },
  [theme.breakpoints.up('lg')]: {
    width: '484px', // Increased from 384px by 100px
  },
}));

const ButtonContainer = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(3),
    marginLeft: theme.spacing(3.6),
  },

}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #F97316, #EF4444)',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  color: 'white',
  fontSize: '14px',
  textTransform: 'none',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #EA580C, #DC2626)',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    fontSize: '16px',
    
  },
  [theme.breakpoints.up('lg')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
   
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  border: '2px solid rgba(255, 255, 255, 0.3)',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  color: 'white',
  fontSize: '14px',
  textTransform: 'none',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
}));

const RightContentContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const DesktopHeroImage = styled('img')(({ theme }) => ({
  width: '650px', // Increased from 500px by 150px for laptops
  height: 'auto',
  objectFit: 'contain',
  maxWidth: '100%',
  marginLeft: 'auto',
  [theme.breakpoints.up('xl')]: {
    width: '750px', // Increased from 600px by 150px for larger screens
  },
  [theme.breakpoints.up('2xl')]: {
    width: '950px', // Increased from 800px by 150px for extra large screens
  },
}));

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  return (
    <HeroContainer>
      {/* Left decorative rectangles */}
      <DecorativeContainer>
        <img src={rect1} alt="" style={{ width: 'auto', height: 'auto' }} />
        <img src={rect2} alt="" style={{ width: 'auto', height: 'auto' }} />
      </DecorativeContainer>

      {/* Center Content Container */}
      <ContentContainer>
        {/* Text Content */}
        <TextContentContainer>
          <Stack spacing={1.5}>
            <SubtitleText>
              Smarter, Faster, and More Reliable
            </SubtitleText>

            <MainTitle>
              Streamline procurement and enhance your supply chain with 1IGS
            </MainTitle>
          </Stack>
        </TextContentContainer>

        {/* Hero Image - Mobile and Tablet */}
        <HeroImageContainer>
          <HeroImage 
            src={heroimage} 
            alt="AI Robot Holding Earth - Global Supply Chain Innovation" 
          />
        </HeroImageContainer>

        {/* Buttons */}
        <ButtonContainer 
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          
        >
          <PrimaryButton
            variant="contained"
            endIcon={<ArrowRightIcon />}
          >
            {isMobile ? 'Explore Sourcing Options' : 'Explore Cost-Effective Sourcing Options'}
          </PrimaryButton>

          <span className='font-bold text-lg tracking-wider'>
            BOOK A MEETING
          </span>
        </ButtonContainer>
      </ContentContainer>

      {/* Right Content - Desktop Hero Image */}
      <RightContentContainer>
        <DesktopHeroImage 
          src={heroimage} 
          alt="AI Robot Holding Earth - Global Supply Chain Innovation" 
        />
      </RightContentContainer>
    </HeroContainer>
  );
}

export default HeroSection;