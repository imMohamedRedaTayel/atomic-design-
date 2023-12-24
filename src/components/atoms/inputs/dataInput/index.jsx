import React, { useState } from 'react'
import styles from './dataInput.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


const DataInput = (props) => {

  const [view, setView] = useState(false)
  // console.log( props );

  const { value, valueChange } = props;
  const handleInputChange = (event) => {
    valueChange(event.target.value);
  };


  return <>
    <div className={styles.inputView} >
      {!props.textarea ? <input className={`${styles.input} ${props.dataInput && styles.dataInput} ${props.ar && styles.ar}`}
        type={view ? "text" : props.type}
        placeholder={props.placeholder ? props.placeholder : 'PLaceholder'}
        onChange={handleInputChange}
        value={value}
      /> : <textarea className={`${styles.input} ${props.dataInput && styles.dataInput} ${props.ar && styles.ar}`}
        type={view ? "text" : props.type}
        placeholder={props.placeholder ? props.placeholder : 'PLaceholder'}
        onChange={handleInputChange}
        value={value}
        rows={5}
      />}

      {props.type === 'password' && <button onClick={() => { setView(!view) }} className={styles.eye} >
        {!view ? <AiFillEye /> : <AiFillEyeInvisible />}
      </button>}
    </div>
  </>
}

export default DataInput