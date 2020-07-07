import fontTheme from '../styles/font';
import baseStyles from '../styles/base';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {fontTheme}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </>
  );
}
