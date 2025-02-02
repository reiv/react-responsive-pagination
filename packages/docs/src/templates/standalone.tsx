import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

import SEO from '../components/SEO';
import GlobalStyles, {
  spacingVertical,
  headingFontFamily,
  fontWeightBold,
  getDynamicHPadding,
} from '../components/GlobalStyles';
import MarkdownContent from '../components/MarkdownContent';

type StandaloneTemplateProps = {
  data: any;
  children: ReactNode;
};

export default function StandaloneTemplate({
  data,
  children,
}: StandaloneTemplateProps) {
  return (
    <StandaloneLayout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description || data.mdx.frontmatter.excerpt}
    >
      <MarkdownContent>{children}</MarkdownContent>
    </StandaloneLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
      }
    }
  }
`;

interface StandaloneLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function StandaloneLayout({
  children: content,
  title,
  description,
}: StandaloneLayoutProps) {
  return (
    <>
      <SEO title={title} description={description} />
      <GlobalStyles />
      <StandalonePageStyles />
      <StandaloneHeader />
      <Main>{content}</Main>
    </>
  );
}

const StandalonePageStyles = createGlobalStyle`
  body {
    padding: ${spacingVertical} ${getDynamicHPadding()};
  }
`;

const Header = styled.header`
  font-family: ${headingFontFamily};
  font-size: 1.5rem;
  font-weight: ${fontWeightBold};
  margin-bottom: 1rem;
`;

const Main = styled.main``;

function StandaloneHeader() {
  return (
    <Header>
      <Link to="/">react-responsive-pagination</Link>
    </Header>
  );
}
