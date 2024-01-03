import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className='bg-gray-800 text-white'>
                <hr className='border-t-2 border-gray-400' />
                <div className='container mx-auto flex flex-col md:flex-row md:justify-evenly md:text-left gap-8 py-10'>
                    <aside className='text-center'>
                        <div className='flex items-center justify-center md:justify-start'>
                            {/* <figure className='h-28 w-28'>
                                <img className='h-full w-full object-contain' src={logo} alt="" />
                            </figure> */}
                            <h1 className='text-xl font-extrabold '>MONEY TRANSFER</h1>
                        </div>
                        <div className='text-lg text-gray-300'>
                            <p className='mb-4'>
                                201 S. Grand Ave., 1st Floor <br />New York City, NY 28020
                            </p>
                            <p className=''>
                                +1 (772) 290-2999
                            </p>
                        </div>
                    </aside>
                    <aside className='text-center'>
                        <h4 className='text-lg font-semibold mb-4 '>Main Navigation</h4>
                        <div className='flex flex-col text-lg gap-2 text-gray-300'>
                            <Link className=''>Home</Link>
                            <Link className=''>Login</Link>
                            <Link className=''>Register</Link>
                            <Link className=''>Service</Link>
                            <Link className=''>Contact Us</Link>
                        </div>
                    </aside>
                    <aside className='text-center md:text-left'>
                        <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
                        <div className='flex items-center justify-center gap-2 mb-4 w-full '>
                            <input
                                className='in-footer rounded pl-3 py-1 w-3/5'
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Your email'
                            />
                            <button className='bg-black  font-bold text-white rounded py-1 px-1 md:px-2 w-auto' type="submit">SUBSCRIBE</button>
                        </div>
                        <div className='flex justify-center md:justify-start text-3xl gap-4 text-gray-300'>
                            <Link className=''>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className=''>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link className=''>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                            <Link className=''>
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                            <Link className=''>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </footer>
    );
};

export default Footer;