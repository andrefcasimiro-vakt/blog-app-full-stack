import styled from 'styled-components'

export const Wrapper = styled.div<{
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  justify-content: flex-start;
  align-items: center;

  padding: 5rem;
`

export const Section = styled.section<{
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-content: center;

  padding: 5rem;
`

export const TitleSection = styled(Section)<{
}>`
  padding: .5rem 0;
`

export const TabSection = styled(Section)<{
}>`
  padding: 0;

  max-width: 40rem;
`

