import React, { useState } from 'react'
import styles from './filter.module.scss'
import Button from '@/components/atoms/buttons/button';


const UsersFilter = ( props ) => {
    // console.log( props );
    const [activeButton, setActiveButton] = useState(2);

    function handleButtonClick(buttonValue) {
        setActiveButton(buttonValue);
        props.onButtonClick(buttonValue);
      }

  return <>
    <div className={styles.filter} >
        <Button onClick={ () => { handleButtonClick(2) } }
        active={activeButton ===2} >
            All Users ({props.totalCount})
        </Button>
        <Button
            disabled={props.activeButton === 0}
            onClick={() => handleButtonClick(0)}
            active={activeButton ===0}>
            Active {props.activeCount !=0  && `(${props.activeCount})` }
        </Button>
        <Button
            disabled={props.bannedCount === 0}
            onClick={() => handleButtonClick(1)}
            active={activeButton ===1}>
            Inactive {props.bannedCount !=0  && `(${props.bannedCount})` }
        </Button>
    </div>
  </>
}

export default UsersFilter