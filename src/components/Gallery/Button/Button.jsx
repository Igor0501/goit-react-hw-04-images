import { Button } from './Button.styled';
import PropTypes from 'prop-types'

export const LoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore()}>
      Load More
    </Button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};