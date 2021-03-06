import { styled, css } from 'frontity';
import {
  colorPrimary,
  colorPrimaryDark,
  colorPrimaryLight,
  fontFamilyTitle,
  fontSizeSmall,
  fontSizeXLarge,
} from '../../../config/globalStyles';
import Link from '../Link/LinkComponent';

export const PostWrapper = styled.div`
  min-height: calc(92.5vh);
  width: 100%;
  margin: 0;
  padding: 24px;

  @media all and (min-width: 920px) {
    min-height: auto;
  }
`;
PostWrapper.displayName = 'PostWrapper';

export const Title = styled.h1`
  position: ${({ isPlayer }) => (isPlayer ? 'absolute' : 'unset')};
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${colorPrimaryDark};
  font-family: ${fontFamilyTitle};
  font-size: ${fontSizeXLarge};
  line-height: 1;

  @media all and (min-width: 920px) {
    position: unset;
  }
`;
Title.displayName = 'Title';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const Author = styled.p`
  font-size: ${fontSizeSmall};
  display: inline;
`;
Author.displayName = 'Author';

export const DateWrapper = styled.p`
  font-size: ${fontSizeSmall};
  display: inline;
`;
DateWrapper.displayName = 'DateWrapper';

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
export const Content = styled.div`
  word-break: break-word;

  ${({ isPlayer }) =>
    isPlayer &&
    css`
      height: 100vh;

      @media all and (min-width: 920px) {
        height: 100%;
      }
    `}

  * {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    line-height: 1.6em;
    text-align: justify;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${colorPrimaryDark};
  }

  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

    @media all and (min-width: 920px) {
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
      border-radius: 30px;

      ${({ isPost }) =>
        !isPost &&
        css`
          box-shadow: none;
        `}
    }

    ${({ isPlayer }) =>
      isPlayer &&
      css`
        width: auto;
        min-width: 30vw;
        height: 100%;
        border-radius: 30px;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);

        @media all and (min-width: 920px) {
          box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.4) !important;

          min-width: auto;
        }
      `}

    ${({ isPost }) =>
      !isPost &&
      css`
        box-shadow: none;
      `}

    ${({ isSeniorPage }) =>
      isSeniorPage &&
      css`
        width: 100%;
        object-fit: cover;
        object-position: center 70%;
      `}
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
    ${({ isPlayer }) =>
      isPlayer &&
      css`
        height: 100%;
      `}
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: ${colorPrimary};
    text-decoration: underline;
    font-weight: 700;
  }

  /* Input fields styles */

  input[type='text'],
  input[type='EMAIL'],
  input[type='url'],
  input[type='tel'],
  input[type='number'],
  input[type='date'],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: ${colorPrimaryLight};
    }
  }

  input[type='submit'] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  ${({ isPlayer }) =>
    isPlayer &&
    css`
      margin-top: 80px;

      @media all and (min-width: 920px) {
        margin-top: 0;
      }
    `}
`;
Content.displayName = 'Content';
