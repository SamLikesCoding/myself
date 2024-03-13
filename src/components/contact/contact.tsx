import Assets from '../assetsLoader';
import './index.css';

export default function contact() {
    
    const data = Assets.profileData.contact;
    
    return (
        <>
            <div className='contact-page'>
                <div className='contact-info'>
                    {
                        data.map((obj, idx) => {
                            const link = (obj.type == 'link')? obj.value:(obj.type == "email")? `mailto:${obj.value}`:"false" ;
                            return (
                                <div key={idx}>
                                    {obj.ref}: <a style={{
                                        fontFamily:'monospace', 
                                        color:'white'}} 
                                        href={link}>{obj.value}</a>
                                </div>
                            )
                        })
                    }
                </div>
                <img src={Assets.basicBackground} alt="" />
            </div>
        </>
    )
}