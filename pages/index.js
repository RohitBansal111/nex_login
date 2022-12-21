import { Inter } from "@next/font/google";
import { GoogleLogin } from "react-google-login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  console.log(process.env.Client_id ,'dkdkdndkjd dkdkdk djd dkjd d dkjdkjdd k ')
  return (
    <>
      <GoogleLogin
        clientId={process.env.Client_id}
        buttonText="Login"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} >This is my custom Google button</button>
        // )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <h1>jdjddkdnd nkdn djkdjk</h1>
    </>
  );
}
