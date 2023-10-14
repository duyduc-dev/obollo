import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Button)`
  background-color: transparent;
  text-decoration: underline;
  color: var(--link-button-color);
  text-transform: none;
  margin-left: 0;
  padding: 0;
  cursor: pointer;
  width: var(--space-width-xl-px);
  height: var(--space-sl-px);
  text-align: center;
  line-height: var(--space-sl-px);
  font-weight: var(--font-weight-bolder);
  font-size: var(--space-sm-px);

  &:hover {
    background-color: transparent;
  }
`;

export default LinkButton;
