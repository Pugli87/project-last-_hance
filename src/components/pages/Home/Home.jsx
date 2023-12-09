import React from 'react';
import DataForm from '../../dataForm/DataForm';
import ModalHome from 'components/Modal/ModalContent/ModalContent';

function Home() {
  return (
    <div>
      <DataForm></DataForm>
      <ModalHome />
    </div>
  );
}

export default Home;
