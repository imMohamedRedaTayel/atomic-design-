import InputLabel from '@/components/atoms/labels/inputLabel'
import React from 'react'
import styles from './inputBox.module.scss'
import DataInput from '@/components/atoms/inputs/dataInput'


const InputBox = ( { ar , label , placeholder , dataInput , type , value , valueChange , textarea } ) => {
  return <>
    <div className={`${styles.inputBox} ${ar && styles.ar}`} >
        <InputLabel ar={ar} > { label } </InputLabel>
        <DataInput ar={ar} 
        dataInput={dataInput} 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        valueChange={valueChange}
        textarea={textarea}
         ></DataInput>
    </div>
  </>
}

export default InputBox