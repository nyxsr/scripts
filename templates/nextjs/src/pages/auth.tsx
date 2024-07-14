import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false,
    },
  }
}
function Auth() {
  return null
}

export default Auth