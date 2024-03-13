import { useState } from 'react';
import Assets from '../assetsLoader';
import './index.css';

export default function CareerPage() {

    const data = Assets.profileData.career;
    const [tabState, setTabState] = useState(-1);


    return (
        <>
            <div className="career-page" style={{backgroundImage:`url(${Assets.coverImage2})`}}>
                <div className="job-list">
                      {
                        tabState < 0? <div>
                            <p style={{ fontFamily:'monospace' ,fontSize:12, padding:'1ch'}}>Click on Job for more information</p>
                            <br />
                            {
                                data.map((obj, idx) => {
                                    return (
                                        <div onClick={() => {setTabState(idx)}} className='job-card' key={idx}>
                                           {obj.role}
                                        </div>
                                    );
                                })
                            }
                        </div>: 
                        <div className='job-info'>
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
                            <div className='back-button' onClick={() => setTabState(-1)}>go back</div>
                        </div>
                      }
                </div>
            </div>
        </>
    );
}