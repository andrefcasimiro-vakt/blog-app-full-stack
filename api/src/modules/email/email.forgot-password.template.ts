import { AccountCreatedPayload, ForgotPasswordPayload } from './email.email-types'
import { getResetPasswordLink } from './email.forgot-password.utils'
import attributes from './email.template.attributes'
import footer from './email.template.footer'

const colors = {
	SECTION_BACKGROUND: '#f5f6f8',
}

const assistanceLink = `#`

const forgotPasswordTemplate = (payload: ForgotPasswordPayload) => `
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
        Hello ${payload.data.username}, <br /><br />
        A request was sent for you to reset your password!
        Click the link below to create a new one!
        <a href="${getResetPasswordLink(payload.data.code)}">Reset your password</a><br /><br />
        If you did not request a password reset, or need help from our support team,
        please <a href="${assistanceLink}">click here</a>.
      </mj-text>
    </mj-column>
  </mj-section>
  ${footer}
</mj-body>
</mjml>
`

export default forgotPasswordTemplate
