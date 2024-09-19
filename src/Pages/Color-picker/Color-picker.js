import React from 'react';
import "./Color-picker.css";
import { SketchPicker } from 'react-color';
import UserContext from '../../Components/usecontext/Usercontext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

function Picker() {
  const { isDarkMode, profile, bgcolor, handleonchange } = useContext(UserContext)

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng);
    } else {
      console.warn('i18n object not initialized or changeLanguage method not available.');
    }
  };

  return (

    <>
      <div className='picker' style={{ background: bgcolor }}>
        <h1 style={{ fontSize: "45px", fontFamily: "sans-serif" }}>{t('line1')}</h1>
        <SketchPicker
          color={bgcolor}
          onChangeComplete={handleonchange}
        />
      </div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>

    </>
  )
}

export default Picker
