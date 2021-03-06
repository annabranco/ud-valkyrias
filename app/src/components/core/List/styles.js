import { styled } from 'frontity';
import { fontSizeLarge, fontSizeSmall } from '../../../config/globalStyles';
import Link from '../Link/LinkComponent';

export const Title = styled.h1`
  margin: 50px 0 0;
  min-height: 25px;
  height: auto;
  width: 90%;
  padding: 10px 5px 10px;
  box-sizing: border-box;
  background: rgba(50, 205, 50, 0.05);
  border-radius: 0 35px 35px 0;
  font-size: ${fontSizeLarge};
  color: darkgreen;
  line-height: 1;
`;
Title.displayName = 'Title';

export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: ${fontSizeSmall};
`;
AuthorName.displayName = 'AuthorName';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: ${fontSizeSmall};
`;
PublishDate.displayName = 'PublishDate';

export const Excerpt = styled.div`
  line-height: 1.6em;
  text-align: justify;
`;
Excerpt.displayName = 'Excerpt';

export const ListContainer = styled.section`
  width: 100%;
  margin: 0;
  padding: 24px;
  list-style: none;

`;
ListContainer.displayName = 'ListContainer';

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
Header.displayName = 'Header';

export const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;
Text.displayName = 'Text';
