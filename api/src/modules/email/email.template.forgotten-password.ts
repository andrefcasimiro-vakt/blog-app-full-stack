import attributes from './email.template.attributes'
import footer from './email.template.footer'

const colors = {
	SECTION_BACKGROUND: '#f5f6f8',
}

interface ForgottenPasswordProps {
	firstName: string
	link: string
	assistanceLink: string
}

const forgottenPasswordTemplate = ({ firstName, link, assistanceLink }: ForgottenPasswordProps) => `
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
        full-width
      >
        <mj-column>
          <mj-text>
            ${firstName}, <br /><br />
            A request was sent for you to reset your password!
            Click the link below to create a new one!
            <a href="${link}">Reset your password</a><br /><br />
            If you did not request a password reset, or need help from our support team,
            please <a href="${assistanceLink}">click here</a>.
          </mj-text>
        </mj-column>
      </mj-section>
      ${footer}
    </mj-body>
  </mjml>
`

export default forgottenPasswordTemplate
