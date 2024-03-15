import { useState } from 'react';
import './index.css';
import { DateSticker } from './dateSticker';

export interface PageNavProps {
    label: String;
    action: Function;
};

export default function PageNav(NavProps: PageNavProps[]) {

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
                NavProps.map((obj, idx) => <div key={idx} onClick={() => {obj.action(idx); clickHandle()}}>{obj.label}</div>)
            }
            </div>
        </>
    );
}
