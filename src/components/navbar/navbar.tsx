import { useState } from 'react';
import './index.css';

export default function PageNav({props}) {

    const curr_time = Date.now();
    const timestamp = Intl.DateTimeFormat('en-DE', {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    }).format(curr_time);

    const [menuActive, setActive] = useState(false);
    const clickHandle = () => setActive(!menuActive);
    console.log(props[0]);

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