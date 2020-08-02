import styled, {css} from "styled-components";
import StyledText from "components/Text/style";

const StyleParagraph = styled(StyledText)`
    ${({ ellipsis }) =>
      ellipsis &&
      css`
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      `}
`;

export default StyleParagraph;
