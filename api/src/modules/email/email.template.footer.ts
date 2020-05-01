const colors = {
	SECTION_BACKGROUND: `#f5f6f8`,
	COLUMN_TEXT: `#71798A`,
}

const FOOTER_TEXT = `Copyright (c) 2020 - Company name`

const footer = `

  <mj-section
    background-color="${colors.SECTION_BACKGROUND}"
    padding-bottom="0"
    padding-left="20%"
    padding-right="20%"
    text-align="center"
  >
    <mj-text
      align="center"
      color="${colors.COLUMN_TEXT}"
      font-size="11px"
    >
      ${FOOTER_TEXT}
    </mj-text>
  </mj-section>

`

export default footer
