import Head from 'next/head';
import {
  Box,
  Text,
  Image,
  Button,
  Container,
  HStack,
  Link,
} from '@chakra-ui/react';
import { Navbar } from '../components/Homepage/Navbar';
import { Footer } from '../components/Homepage/Footer';
import { Card } from '../components/Homepage/Card';
import React from 'react';
import router from 'next/router';
import { ImageCard } from '../components/Homepage/ImageCard';

const Homepage = () => {
  const subheaderCopy = [
    'Bond your assets to $GAIA',
    'Stake your $GAIA to rewards',
    'Direct treasury funds to save the planet',
  ];

  return (
    <Box display="flex" flexDir="column">
      <Head>
        <title>Gaia DAO</title>
        <meta name="description" content="Mother Earth’s Olympus Fork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box
        bgImage="url(./images/gaia-bg.png)"
        pb="80px"
        maxW="100%"
        backgroundSize="cover"
        filter="drop-shadow(0px 0px 4px black)"
      >
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          mt={['150px', null, '202px']}
        >
          <Image src="./gaia-logo-white.svg" width="236px" alt="logo" />
          <Text
            maxW="500px"
            fontSize="6xl"
            lineHeight="60px"
            fontWeight="light"
            mt="100px"
          >
            The Olympus Fork for Mother Earth
          </Text>
          <Button
            mt="50px"
            px="24px"
            py="24px"
            borderRadius="100px"
            backgroundColor="brand.white"
            color="brand.black"
            onClick={() => router.push('/dashboard')}
          >
            <Text fontSize="24px"> ENTER THE APP</Text>
          </Button>
          <Box mt="63px">
            {subheaderCopy.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Box>
          <Box
            mt="64px"
            display="flex"
            style={{ gap: '10px' }}
            width="100%"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection={['row']}
          >
            <Box
              display="flex"
              flexDir="column"
              width={['100%', null, 'max-content']}
            >
              <Card heading="TOTAL $GAIA STAKED" subheading="99.2%" />
              <Card heading="TOTAL VALUE LOCKED" subheading="$4.3m" />
            </Box>
            <Box
              display="flex"
              flexDir="column"
              width={['100%', null, 'max-content']}
            >
              <Card heading="TREASURY BALANCE" subheading="$534m" />
              <Card heading="CURRENT APY" subheading="54,453%" />
            </Box>
            <Box height="inherit" width={['100%', null, 'max-content']}>
              <Card
                heading="CURRENT APY"
                subheading="54,453%"
                sx={{ height: ['100%', null, null, '210px'] }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgColor="brand.white" pb="80px" maxW="100%" backgroundSize="cover">
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          color="brand.black"
          mt="130px"
        >
          <Text
            maxW="381px"
            fontSize="6xl"
            fontWeight="light"
            lineHeight="60px"
          >
            Your tokens, your votes.
          </Text>
          <Text maxW="746px" mt="63px">
            Your tokens are backed by assets that contribute to a healthy earth.
            Each season, GAIA holders vote on the treasury backing asset to
            accumulate for the upcoming season.
          </Text>
          <Box textAlign="start" display="flex" sx={{ gap: '20px' }}>
            <Box>
              <Box maxW="432px" my="36px">
                <Text
                  mt={['10px', null, '20px']}
                  ml={['10px', null, '20px']}
                  backgroundColor="#E43535"
                  position="absolute"
                  color="brand.white"
                  fontWeight="bold"
                  fontSize="xs"
                  borderRadius="8px"
                  p="10px 12px 6px 12px"
                >
                  LIVE NOW
                </Text>
                <ImageCard
                  src="./images/winter.png"
                  heading="OCTOBER - FEBURARY"
                  subheading="WINTER"
                />
              </Box>
              <Box maxW="432px">
                <ImageCard
                  src="./images/summer.png"
                  heading="JUNE - AUGUST"
                  subheading="SUMMER"
                />
              </Box>
            </Box>
            <Box>
              <Box maxW="432px" my="36px">
                <ImageCard
                  src="./images/spring.png"
                  heading="MARCH - MAY"
                  subheading="SPRING"
                />
              </Box>
              <Box maxW="432px">
                <ImageCard
                  src="./images/fall.png"
                  heading="SEPTEMBER - NOVEMBER"
                  subheading="FALL"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        bgImage="url(./images/mother-earth.png)"
        height="750px"
        maxW="100%"
        backgroundSize="cover"
      >
        <Container
          maxW="container.lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          textAlign="center"
          fontWeight="light"
        >
          <Text maxW="381px" fontSize="6xl" lineHeight="60px">
            Mother Earth is waiting.
          </Text>
        </Container>
      </Box>
      <Box bgColor="brand.white" pb="80px" maxW="100%" backgroundSize="cover">
        <Container
          mt="130px"
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          color="brand.black"
        >
          <Text maxW="746px">
            An Olympus fork for the Arbitrum ecosystem. Bond sales and liquidity
            fees increase the underlying assets in our treasury, which back
            outstanding GAIA tokens with intrinsic value.
          </Text>
          <HStack spacing="14px" mt="50px">
            <Button
              backgroundColor="brand.black"
              color="brand.white"
              _hover={{ backgroundColor: '#000000' }}
              onClick={() =>
                window.open('https://gaia-dao.gitbook.io/gaia-dao/')
              }
            >
              DOCUMENTATION
            </Button>
            <Button
              colorScheme="black"
              variant="outline"
              onClick={() => window.open('https://discord.gg/Rws4KzGy')}
            >
              JOIN THE DISCORD
            </Button>
          </HStack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
