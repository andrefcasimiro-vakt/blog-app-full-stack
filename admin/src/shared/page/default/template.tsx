import React from 'react'
import { Title } from 'shared/typography/typography.styles'
import {
  Wrapper,
  TabSection,
  TitleSection,
  ContentSection,
} from './template.styles'
import Tab from 'shared/tab/tab.component'
import { TabOption } from 'shared/tab/tab.types'

interface Props {
  children: React.ReactChild,
  title?: string,
  topTabs?: TabOption[],
}

const PageTemplate = ({ children, title, topTabs }: Props) => {
  if (topTabs) {
    return (
      <Wrapper>
        {title && (
          <TitleSection>
            <Title>{title}</Title>
          </TitleSection>
        )}
        <TabSection>
          <Tab tabs={topTabs} />
        </TabSection>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {title && (
        <TitleSection>
          <Title>{title}</Title>
        </TitleSection>
      )}

      <ContentSection>
        {children}
      </ContentSection>
    </Wrapper>
  )
}

export default PageTemplate
