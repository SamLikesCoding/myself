import Assets from '../assetsLoader';
import './index.css';

export default function eduPage() {

    const data = Assets.profileData.education;

    return (
        <>
            <div className='edu-container'>
                <div className='edu-info'>
                    <h2>Academic History</h2>
                    {
                        data.map((obj, idx) => {
                            return (
                                <div key={idx} style={{padding:'7px'}}>
                                    <h4>{obj.level}: {obj.domain}</h4>
                                    <p>
                                        {obj.university}, {obj.location}
                                        <br />
                                        {obj.year}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <img src={Assets.coverImage3} alt="codingScreens"/>
            </div>
        </>
    );
}