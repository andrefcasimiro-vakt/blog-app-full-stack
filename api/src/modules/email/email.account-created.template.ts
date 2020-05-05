import { AccountCreatedPayload } from './email.email-types'
import attributes from './email.template.attributes'
import footer from './email.template.footer'

const colors = {
	SECTION_BACKGROUND: '#f5f6f8',
}

const accountCreatedTemplate = (payload: AccountCreatedPayload) => `
  <mjml>
    <mj-head>${attributes}</mj-head>
    <mj-body>
      <mj-section
        text-align="center"
        background-color="${colors.SECTION_BACKGROUND}"
      >
        <mj-column>
          <mj-image width="139px" height="auto" src="" />
        </mj-column>
      </mj-section>

      <mj-section
        text-align="center"
        full-width="full-width"
      >
        <mj-column>
          <mj-text>
            Welcome, ${payload.data.username}, <br /><br />
            
            Your account was created successfuly.<br /><br />

            We are excited to have you with us!
          </mj-text>
        </mj-column>
      </mj-section>
      ${footer}
    </mj-body>
  </mjml>
`

export default accountCreatedTemplate
