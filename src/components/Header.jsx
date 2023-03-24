import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Button,
  useDisclosure,
  DrawerHeader,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme="purple"
        p={0}
        h={10}
        w={10}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={"overlay"}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/upload">Upload Videos</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              left={0}
              bottom={10}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to="/login">Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                <Link to="/signup"> Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
