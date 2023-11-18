function Login() {
  return (
    <Login
      user={res}
      opened={loginOpen}
      close={() => {
        loginToggle()
        modalToggle()
      }}
      signup={() => {
        loginToggle()
        signUpToggle()
      }}
    />
  )
}

export default Login
