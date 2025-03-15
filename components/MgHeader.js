import { Container, Heading, Box, Text } from '@radix-ui/themes';

export default function MgHeader() {
  return (
    <Box style={{ borderBottom: '1px solid var(--gray-a5)', padding: '32px 0 24px' }}>
      <Container size="4">
        <Heading size="8" align="center" weight="bold" className="gradient-text" mb="2">
          Meme Generator
        </Heading>

        <Heading size="3" align="center" color="gray" className="gradient-text" mb="2">
          Meme Generator
          Your daily dose of internet humor
        </Heading>
      </Container>
    </Box>
  );
}
