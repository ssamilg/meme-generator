import { Card, Box, Text, Link, AspectRatio } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

function MgMemeCard({ meme }) {
  const defaultMeme = {
    title: 'No memes ?',
    subreddit: 'sadcat',
    url: 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg',
    postLink: '#'
  };

  const currentMeme = meme || defaultMeme;

  return (
    <Card size="2" style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
      <Box p="1">
        <Text as="div" size="6" weight="bold" mb="2">
          {currentMeme.title}
        </Text>
        <Text as="div" size="3" color="gray" mb="4">
          r/{currentMeme.subreddit}
        </Text>
      </Box>

      <AspectRatio ratio={4/3}>
        <img
          src={currentMeme.url}
          alt={currentMeme.title}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--gray-a2)',
          }}
        />
      </AspectRatio>

      <Box p="4" pt="3">
        <Link
          href={currentMeme.postLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '15px'
          }}
        >
          <Text size="3">View Source</Text>
          <ExternalLinkIcon width="16" height="16" />
        </Link>
      </Box>
    </Card>
  );
}

export default MgMemeCard;
