import {memo} from 'react';

import Container from '@ui-kit/layout/container';

const init = () => {
  if (typeof window !== 'undefined') {
    (window as any).YaSendSuggestToken?.(`${window.location.origin}`);
  }
};

const Auth = () => {
  return (
    <>
      <script
        src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js"
        onLoad={init}
        async
      />
      <Container>Авторизация...</Container>
    </>
  );
};
export default memo(Auth);
