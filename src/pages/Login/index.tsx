import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import config from '../../utils/config';
import { getUserProfile } from '../../utils/fetchAPI';
import { login } from '../../store/auth';
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import image from '../../assets/media-player.svg';
import { FaSpotify } from 'react-icons/fa';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const accessTokenParams = params.get('#access_token');

    if (accessTokenParams !== null) {
      const setUserProfile = async () => {
        try {
          const response = await getUserProfile(accessTokenParams);
          dispatch(
            login({
              accessToken: accessTokenParams,
              user: response,
            })
          );
          history.push('/create-playlist');
        } catch (e) {
          alert(e);
        }
      };
      setUserProfile();
    }
  }, []);

  const getSpotifyLinkAuthorize: () => string = () => {
    const state = Date.now().toString();

    return `${config.SPOTIFY_AUTH_URL}?client_id=${config.API_URL}&response_type=${config.RESPONSE_TYPE}&redirect_uri=${config.REDIRECT_URI}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  };

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={'24px'}
      h={'100vh'}
      align={'center'}
      justify={'center'}
      p={{ sm: '8px', md: '32px' }}
    >
      <Center w={{ base: '80%', md: '80%' }}>
      <Box w={{ base: '70%', md: '50%' }}>
        <Heading as={'h3'} size="lg" color={'blue.500'}>
          Spotify Playlist Maker
        </Heading>
        <Text fontSize={'xl'} my={4}>
          please login to Spotify here.
        </Text>
        <Button colorScheme={'blue'} rightIcon={<FaSpotify />}>
          <Link
            href={getSpotifyLinkAuthorize()}
            style={{ textDecoration: 'none' }}
          >
            Login Here
          </Link>
        </Button>
      </Box>
      </Center>
      
    </Stack>
  );
};

export default Login;
