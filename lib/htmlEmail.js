export const htmlEmail = (name, message) => {
  return (
    <div style={{ fontFamily: `'Courier New', sans-serif, 'Open Sans'` }}>
      <h1>Hello {name}</h1>
      <p>This is a confirmation, that your message to drmlb.io has indeed been received sucessfully.<br />I&apos;ll come back to you as soon as possible.</p>
      <p>Thank you so much,<br />NFT Engine Team</p>
      <div style={{ marginTop: '40px' }}>
        <p>Your message:<br />{message}</p>
      </div>
    </div>
  )
}
