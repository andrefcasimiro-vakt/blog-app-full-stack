import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 1rem;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  
`

export const FormField = styled.div`
  display: flex;
  margin: 1rem;
  width: 100%;
`

export const SubmitWrapper = styled(FormField)`
  margin: 0;
  margin-top: 2rem;
  justify-content: flex-end;
`
