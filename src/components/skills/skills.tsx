import Assets from '../assetsLoader';
import './index.css';

export default function skills() {
    
    const skillData = Assets.profileData.skills;
    const descp = Assets.profileData.about_me.join(' ');

    return (
        <>
            <div className='page-container'>
                <div className='content-header'>
                    <h2>I can do</h2>
                    <p style={{textAlign:'justify'}}>{descp}</p>
                    <p>Click cards to reveal.</p>
                </div>
                <div className='list-container'>
                    {
                        skillData.map((obj, idx) => {
                            return (
                                <div className='list-item' style={{backgroundColor:`-webkit-linear-gradient(12deg, ${obj.logo_grad.join(',')})`}} key={idx}>
                                    <div className='skill-name'>{obj.skill_name}</div>
                                    <div className='skill-conf'>Level: {obj.confidence}</div>
                                    <div className='skill-descp'>{obj.description.join(' ')}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}