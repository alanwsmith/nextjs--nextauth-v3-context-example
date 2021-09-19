export default function UnprotectedPage() {
  return (
    <>
      <p>This is an un protected page. </p>
      <p>You can see if regardless of if you are signed in or not</p>
      <p>If you are signed in, you will see a Sign Out button</p>
      <p>If you are not signed in, you will see a Sign In button</p>
    </>
  )
}

UnprotectedPage.secure = false
