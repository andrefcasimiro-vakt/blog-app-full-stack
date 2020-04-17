import React from 'react'
import { Title } from 'shared/typography/typography.styles'
import {
  Wrapper,
  TabSection,
  TitleSection,
} from './template.tab.styles'
import Tab from 'shared/tab/tab.component'
import { TabOption } from 'shared/tab/tab.types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'

interface Props {
  title?: string,
  tabs: TabOption[],
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  titleSection: {
    color: theme.palette.primary.main,
  }
});


const TabPageTemplate = ({ title, tabs }: Props) => {
  const classes = useStyles()

  return (
    <Wrapper>
      <TabSection>        
        {title && (
          <TitleSection className={classes.titleSection}>
            <Title>{title}</Title>
          </TitleSection>
        )}
        <Tab tabs={tabs} />
      </TabSection>
    </Wrapper>
  )
}

export default TabPageTemplate
