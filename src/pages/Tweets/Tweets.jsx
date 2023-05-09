import { BackLink } from 'components/BackLink/BackLink';
import FilterSelect from 'components/StatusFilter/StatusFilter';
import { StyledP } from './Tweets.styled';
import { TweetList } from 'components/TweetList/TweetList';
import { useLocation } from 'react-router-dom';

const Tweets = () => {
  const location = useLocation();
  const from = location?.state?.from ?? '/';

  return (
    <>
      <BackLink to={from}>Go back</BackLink>
      <StyledP>Show tweets:</StyledP>
      <FilterSelect />
      <TweetList />
    </>
  );
};

export default Tweets;
