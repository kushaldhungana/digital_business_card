import photo from '../images/CV_Photo.jpg'



export default function Info() {
    const link =()=>{
        window.open('https://www.linkedin.com/in/kushal-dhungana-ab37b812b/','_blank');
    };
    const email_link =()=>{
        window.location.href='mailto:kushal.dhungana@gmail.com';
    }
    return(
        <div className='info'>
            <img className='cv-photo' src={photo} alt='CV'/>
            <div className="info-child">
                <h1>Kushal Dhungana</h1>
                <h2>Full Stack Developer</h2>
                <p>kushal.dhungana@gmail.com</p>
            </div>
            <div className='button'>
                <button className='email' onClick={email_link}>Email</button>
                <button className='linkedin' onClick={link} >LinkedIn</button>
            </div>
        </div>
    )
}


