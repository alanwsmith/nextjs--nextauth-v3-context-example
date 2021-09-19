export default function ProtectedPage() {
  return (
    <>
      <p>This is an protected page. </p>
      <p>The protection is done client side</p>
      <p>
        <strong>IMPORTANT:</strong> Because the authentication is done client
        side, it is not secure enough to protect sensitive data. Any sensitive
        data must be loaded via secondary secure API calls
      </p>
      <p>
        Because this page is only visible when a user is signed in it displays
        the sign out button
      </p>
    </>
  )
}

ProtectedPage.secure = true
