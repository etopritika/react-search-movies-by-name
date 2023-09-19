import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

export default function BackLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}


BackLink.propTypes = {
  to: PropTypes.object,
}