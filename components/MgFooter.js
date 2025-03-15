import { Box, Container, Text, Link, Flex, Separator } from '@radix-ui/themes';
import { GitHubLogoIcon, HeartFilledIcon } from '@radix-ui/react-icons';

export default function MgFooter() {
  return (
    <Box style={{
      borderTop: '1px solid var(--gray-a5)',
      marginTop: 'auto',
      backdropFilter: 'blur(8px)',
      backgroundColor: 'var(--gray-a2)'
    }}>
      <Container size="4" py="5">
        <Flex direction="column" gap="4" align="center">
          <Flex align="center" gap="2">
            <Text size="2">Made with</Text>
            <HeartFilledIcon className="gradient-text" width="14" height="14" />
            <Text size="2">using</Text>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              weight="medium"
            >
              Next.js
            </Link>
            <Text size="2">&</Text>
            <Link
              href="https://www.radix-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              weight="medium"
            >
              Radix UI
            </Link>
          </Flex>

          <Flex align="center" gap="4">
            <Link
              href="https://github.com/D3vd/Meme_Api"
              target="_blank"
              rel="noopener noreferrer"
              size="2"
            >
              Meme API
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://github.com/ssamilg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <GitHubLogoIcon width="14" height="14" />
              <Text size="2">@ssamilg</Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
