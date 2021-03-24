import React, { useEffect, useState } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router';

const Admin = () => {
  const history = useHistory();
  const [workTitle, setWorkTitle] = useState('');
  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    const dbWorks = await dbService.collection('works').get();
    dbWorks.forEach((document) => {
      const workObj = {
        ...document.data(),
        id: document.id,
      };
      setWorks((prev) => [workObj, ...prev]);
    });
  };
  useEffect(() => {
    getWorks();

  }, []);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setWorkTitle(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('works').add({
      workTitle
    });
    setWorkTitle('');
  };
  const onSignOutClick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onSignOutClick}>Sign-Out</button>
      <form onSubmit={onSubmit}>
        <input 
          name='workTitle' type='text' placeholder='Work Title' required 
          value={workTitle}
          onChange={onChange}
        />
        
        <input type='submit' value='Save' />
      </form>
      <div>
        {works.map(work => (
          <div key={work.id}>
            <h3>{work.workTitle}</h3>
          </div>
        ))}
      </div>
    </>
  )
};

export default Admin;