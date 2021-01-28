import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Page could not be found</h2>
            <Link style={{color:"red"}} to='/' className='btn'>Back To People</Link>
        </div>
    )
}

export default Error
