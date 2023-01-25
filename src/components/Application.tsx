import React from 'react';

import './Application.scss';
import CatchComponentErrors from './common/catchComponentError/catchComponentError';
import SnackBar from './common/snackBar/SnackBar';
import ThemeComponent from './main/ThemeComponent';

const Application: React.FC = () => {
  return (
    <CatchComponentErrors>
      <ThemeComponent/>
      <SnackBar/>
    </CatchComponentErrors>
  );
};

export default Application;
