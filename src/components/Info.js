import photo from '../images/CV_Photo.jpg'



export default function Info() {
    const link =()=>{
        window.location.href='https://www.linkedin.com/in/kushal-dhungana-ab37b812b/';
    };
    return(
        <div className='info'>
            <img className='cv' src={photo} alt='CV Photo'/>
            <h1>Kushal Dhungana</h1>
            <h2>Frontend Developer</h2>
            <p>kushal.dhungana@gmail.com</p>
            <div className='button'>
                <button className='email'>Email</button>
                <button className='linkedin' onClick={link}>LinkedIn</button>
            </div>
        </div>
    )
}