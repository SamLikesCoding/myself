
import { useState } from 'react';
import Assets from '../assetsLoader';
import './index.css';

export default function CareerPage() {

    const data = Assets.profileData.career;
    const [tabState, setTabState] = useState(-1);

    const TabSwitch = (idx: any) => {
        setTabState(idx);
    }


    return (
        <>
            <div className="career-page" style={{backgroundImage:`url(${Assets.coverImage})`}}>
                <div className="job-list">
                    {
                        tabState < 0? <div>
                            <p style={{ fontFamily:'monospace' ,fontSize:12, padding:'1ch'}}>Click on Job for more information</p>
                            <br />
                            {
                                data.map((obj, idx) => {
                                    return (
                                        <div onClick={() => {TabSwitch(idx)}} className='job-card' key={idx}>
                                            {obj.role}
                                        </div>
                                    );
                                })
                            }
                        </div>: 
                        <div className={tabState < 0? 'job-list':'job-list-expanded'}>
                            <h2>{data[tabState].role}</h2>
                            <br />
                            <p style={{fontWeight: 'bold', fontSize:14, margin:0}}>{data[tabState].org} @ {data[tabState].location}</p>
                            <p style={{fontWeight: 'bold', fontSize:14, margin:0}}>{data[tabState].duration}</p>
                            <br />
                            <p>
                                {data[tabState].description}
                            </p>
                            <br />
                            <p style={{fontFamily: 'monospace', fontSize:12}}>Keywords: {data[tabState].keywords}</p>
                            <br />
                            <div className='back-button' onClick={() => {TabSwitch(-1)}}>go back</div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}