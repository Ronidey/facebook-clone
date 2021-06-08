import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../../Global/Modal';
import EditTextInfo from './EditTextInfo';
import AppContext from '../../../AppContext';

function EditInfo({ user, closeEditInfo }) {
  const userInfo = user.personalInfo;
  const { appDispatch } = useContext(AppContext);

  const [working, setWorking] = useState(userInfo.working || '');
  const [study, setStudy] = useState(userInfo.study || '');
  const [lives, setLives] = useState(userInfo.lives || '');
  const [relationship, setRelationShip] = useState(userInfo.relationship);
  const [birthday, setBirthday] = useState(
    userInfo.birthday ? new Date(userInfo.birthday) : new Date()
  );

  const handleSave = () => {
    const info = {
      working,
      study,
      lives,
      relationship,
      birthday: String(birthday)
    };

    appDispatch({ type: 'updatePersonalInfo', payload: info });
    closeEditInfo();
  };

  const handleRelationChange = (e) => {
    setRelationShip(e.target.value);
  };

  const handleBirthdayChange = (date) => {
    setBirthday(date);
  };

  return (
    <Modal show={true} onClose={closeEditInfo} maxWidth='600px'>
      <div className='EditInfo p-relative' style={{ padding: '3rem 1.5rem' }}>
        <EditTextInfo label='working' onChange={setWorking} value={working} />
        <EditTextInfo label='study' onChange={setStudy} value={study} />
        <EditTextInfo
          label='lives'
          value={lives}
          allowedTextLength={25}
          onChange={setLives}
        />
        <div className='mb-lg'>
          <h4 className='EditInfo__label'>Relationship</h4>
          <select defaultValue={relationship} onChange={handleRelationChange}>
            <option value=''>None</option>
            <option value='single'>Single</option>
            <option value='in a relationship'>In a relationship</option>
            <option value='married'>Married</option>
          </select>
        </div>

        <div>
          <h4 className='EditInfo__label'>Birthday</h4>
          <DatePicker selected={birthday} onChange={handleBirthdayChange} />
        </div>

        <footer style={{ textAlign: 'right' }} className='mt-lg'>
          <button
            onClick={closeEditInfo}
            className='btn btn-lg btn-light mr-sm'
          >
            Cencel
          </button>
          <button onClick={handleSave} className='btn btn-primary btn-lg'>
            Save
          </button>
        </footer>
      </div>
    </Modal>
  );
}

export default EditInfo;
