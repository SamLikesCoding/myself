import { useState } from 'react';
import './index.css';
import { DateSticker } from './dateSticker';

export default function PageNav({props}) {

    const timestamp = DateSticker();

    const [menuActive, setActive] = useState(false);
    const clickHandle = () => setActive(!menuActive);

    return(
        <>
           <div className='nav-sect'>
                <div className='start-button' onClick={clickHandle}>start</div>
                <div className='timestamp-nav'>{timestamp}</div>
            </div>
            <div id='nav-menu' className='nav-menu' style={{visibility:menuActive? 'visible':'hidden'}}>
            {
                props.map((opt: any) => (
                    <div key={opt.pageKey} onClick={() => {opt.action(); clickHandle();}}>{opt.label}</div>
                ))
            }
            </div>
        </>
    );
}