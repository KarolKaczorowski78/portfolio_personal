import React, { useEffect, useState, MouseEvent as ME } from 'react';
import Div from './sendingEmailInformator.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Sendingemailinformator = (props: { sendingResult: boolean }) => {

    const successStr = 'E-mail sent succesfuly!';
    const errorStr = 'An error occured while sending an e-mail'

    const [currIcon, setCurrIcon] = useState<IconDefinition>(faCheckCircle);
    const [resultStr, setResultStr] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const [didMount, setDidMount] = useState<boolean>(false);

    useEffect(() => {
        setDidMount(true);
    }, [])

    useEffect(() => {
        didMount && (() => {
            setCurrIcon(props.sendingResult ? faCheckCircle : faExclamationCircle);
            setResultStr(props.sendingResult ? successStr : errorStr);
            setVisible(true);
        })()
    }, [props.sendingResult]);

    const handleClick = (e: ME<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVisible(false);
    }
    
    return (
        <Div bgColor={ props.sendingResult ? '#32CD32' : '#ee4358' } visible={ visible }>
            <FontAwesomeIcon icon={ currIcon } />
            <h3>{ resultStr }</h3>
            <button onClick={ handleClick }>Okay</button>
        </Div>
    )
}

export default Sendingemailinformator;
