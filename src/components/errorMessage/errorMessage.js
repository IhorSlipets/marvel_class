import img from './error.gif';

const ErrorMessage = () => {
    return (
        // <img src={process.env.PUBLIC_URL + '/error.gif'} alt="" />
        <img style={{display: 'block', width: '250px', heigth: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='error'/>
    )
}

export default ErrorMessage;