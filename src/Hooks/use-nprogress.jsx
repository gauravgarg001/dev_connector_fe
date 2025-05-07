import { useEffect, useState } from 'react';
import nProgress from 'nprogress';
import { useLocation } from 'react-router-dom';
import useMounted from './use-mounted';
const ProgressBar = () => {

  const mounted = useMounted();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      nProgress.start();
      setVisible(true);
    }
    if (visible) {
      nProgress.done();
      setVisible(false);
    }
    if (!visible && mounted) {
      setVisible(false);
      nProgress.done();
    }
    return () => {
      nProgress.done();
    }
  }, [pathname, mounted]);


  const styles = `
      #nprogress {
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 5;
      }
      #nprogress .bar {
        background: #D22B2B;
        height: 0.25rem;
      }
      #nprogress .peg {
        box-shadow: 0 0 10px red, 0 0 5px red;
      }
      #nprogress .spinner-icon {
        width: 20px;
        height: 20px;
        border-top-color: red;
        border-left-color: red;
     }
  `;
  return ( <style>{styles}</style> );
};
export default ProgressBar;