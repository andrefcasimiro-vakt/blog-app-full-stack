const colors = {
	TEXT: `#71798A`,
	TABLE: `#505050`,
	LINK: `#00A4CE`,
	HEADER: `#f5f6f8`,
}

const attributes = `
  <mj-attributes>
    <mj-text
      color="${colors.TEXT}"
      font-size="16px"
      font-family="Helvetica, Arial, sans-serif"
    />
    <mj-table
      color="${colors.TABLE}"
      font-size="16px"
      font-family="Helvetica, Arial, sans-serif"
      font-weight="normal"
    />
  </mj-attributes>
  <mj-style inline="inline">
    a {
      text-decoration: none;
      font-weight: bold;
      color: ${colors.LINK}
    }
    .header {
      background: ${colors.HEADER};
    }
    .top-radius {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      overflow: hidden;
    }
    .bottom-radius {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  </mj-style>
`

export default attributes
