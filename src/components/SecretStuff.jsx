
export default function SecretStuff({ setIsLoggedIn }) {
  return (
    <>
      <h2>Top Secret Stuff Here</h2>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </>
  )
}
