import { Container, Box, Text, Button, Flex, IconButton } from '@radix-ui/themes';
import { MagnifyingGlassIcon, Cross2Icon, RocketIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import axios from 'axios';
import MgMemeCard from './MgMemeCard';

export default function MgCardContainer() {
  const [meme, setMeme] = useState(null);
  const [isSubredditFilterOn, setIsSubredditFilterOn] = useState(false);
  const [subredditName, setSubredditName] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleSubredditFilter = () => {
    if (isSubredditFilterOn) {
      setSubredditName('');
    }
    setIsSubredditFilterOn(!isSubredditFilterOn);
  };

  const fetchMeme = async () => {
    setLoading(true);
    const url = subredditName ? `https://meme-api.com/gimme/${subredditName}` : 'https://meme-api.com/gimme';

    try {
      const res = await axios.get(url);
      setMeme(res.data);
    } catch (error) {
      console.error('Error fetching meme:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubredditChange = (e) => {
    setSubredditName(e.target.value.trim().toLowerCase());
  };

  return (
    <Container size="3" py="8">
      <Flex direction="column" gap="6" align="center">
        <Text size="4" align="center" color="gray">
          Ready for some laughs? Hit that button!
        </Text>

        <Flex direction="column" gap="3" align="center" style={{ width: 'fit-content' }}>
          {isSubredditFilterOn && (
            <Box style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              height: '35px',
              backgroundColor: 'var(--gray-a3)',
              borderRadius: 'var(--radius-4)',
              gap: '4px',
              width: '100%'
            }}>
              <Text size="2" color="gray">r/</Text>
              <input
                type="text"
                value={subredditName}
                onChange={handleSubredditChange}
                placeholder="Enter subreddit"
                autoFocus
                style={{
                  border: 'none',
                  background: 'none',
                  outline: 'none',
                  color: 'var(--gray-12)',
                  fontSize: '14px',
                  width: '100%',
                  padding: '0'
                }}
              />
            </Box>
          )}

          <Flex gap="3" align="center">
            <Button
              size="3"
              onClick={fetchMeme}
              disabled={loading}
              variant="solid"
            >
              <RocketIcon />
              {loading ? 'Summoning meme...' : 'Show me the memes!'}
            </Button>

            <IconButton
              variant="soft"
              onClick={toggleSubredditFilter}
              radius="full"
              size="3"
              color={isSubredditFilterOn ? 'red' : 'gray'}
              title={isSubredditFilterOn ? 'Clear subreddit filter' : 'Filter by subreddit'}
            >
              {isSubredditFilterOn ? <Cross2Icon width="18" height="18" /> : <MagnifyingGlassIcon width="18" height="18" />}
            </IconButton>
          </Flex>

          {isSubredditFilterOn && subredditName && (
            <Text size="2" color="gray">
              Filtering from r/{subredditName}
            </Text>
          )}
        </Flex>

        <Box style={{ width: '100%', marginTop: '16px' }}>
          <MgMemeCard meme={meme} />
        </Box>
      </Flex>
    </Container>
  );
}
