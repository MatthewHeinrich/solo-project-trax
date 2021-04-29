import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import EditInfo from '../EditInfo/EditInfo';

function EditPage() {
  const history = useHistory();

  return (
    <div>
      <EditInfo />

      <center>
        
      </center>
    </div>
  );
}

export default EditPage;