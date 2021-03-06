import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import profile from '../assets/profile.jpg';
import { Footer } from '../components/Footer';
import { LinkList } from '../components/LinkList';

export const About = () => {
    const linkColor = useColorModeValue('green.500', 'green.200');
    const placeholderColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <Flex flexDirection="column" alignItems="center">
            <Flex
                flexDirection="column"
                rowGap={['32px', '32px', '64px', '64px']}
                width={['95%', '95%', '85%', '75%']}
                marginY="64px"
            >
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize={['36px', '36px', '48px', '48px']}>
                        About Me
                    </Heading>
                    <Flex
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems="center"
                        gap={['32px', '32px', '64px', '64px']}
                    >
                        <Text fontSize={['16px', '16px', '18px', '20px']}>
                            Hi, my name is Steven. I recently graduated from
                            Oregon State University with a Bachelor's Degree in
                            Computer Science.
                            <br />
                            <br />
                            During my undergraduate education at OSU, I took on
                            a variety of courses and projects to explore the
                            different fields of Computer Science. For the summer
                            of 2021, I was a{' '}
                            <Link
                                href="https://bright.md/blog/where-software-healthcare-meet-reflections-from-bright-mds-summer-engineering-intern"
                                isExternal
                                color={linkColor}
                            >
                                Software Engineering Intern at Bright.md
                            </Link>{' '}
                            where I worked on front-end development and design
                            systems. Overall, I'm passionate about cloud
                            application development and web development.
                            <br />
                            <br />
                            In my free time, my interests include film, history,
                            architecture, music, design, and video games.
                        </Text>
                        <Image
                            src={profile}
                            alt="Steven Bui"
                            fallback={
                                <Box
                                    minWidth="256px"
                                    minHeight="256px"
                                    borderRadius="full"
                                    backgroundColor={placeholderColor}
                                />
                            }
                            boxSize="256px"
                            borderRadius="full"
                        />
                    </Flex>
                    <LinkList />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};
