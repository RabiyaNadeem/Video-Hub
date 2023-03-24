import React from 'react';
import {
  Stack,
  Box,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="sm" textTransform={'uppercase'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter email here..."
              focusBorderColor="none"
              border={'none'}
              borderRadius="none"
              outline={'none'}
            />
            <Button colorScheme={'purple'} borderRadius={'full'} p={'0'}>
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          textTransform={'uppercase'}
        >
          <Heading size={'md'}>Video Hub</Heading>
          <Text>All rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'sm'} textTransform={'uppercase'}>
            Socials
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://youtube.com">Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://instagram.com">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://twitter.com">Twitter</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
