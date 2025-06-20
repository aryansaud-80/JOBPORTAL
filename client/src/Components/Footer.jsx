import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='px-10 py-2 mx-auto mt-5 max-w-7xl'>
      <div className='flex flex-wrap justify-between gap-4'>
        <div>
          <div className='flex items-center gap-4'>
            <h1
              onClick={() => navigate('/')}
              className='text-2xl sm:text-3xl md:text-4xl italic underline cursor-pointer font-extrabold'
            >
              <span className='text-secondary'>Ar</span>Job
            </h1>
            <p className='hidden text-xl text-gray-500 lg:block'>|</p>
            <p className='hidden text-gray-500 md:block'>
              Copyright @AryanSaud | All right reserved
            </p>
          </div>
        </div>

        <div className='flex gap-4'>
          <img
            className='cursor-pointer size-auto'
            src={assets.facebook_icon}
            alt=''
          />
          <img
            className='cursor-pointer size-auto'
            src={assets.twitter_icon}
            alt=''
          />
          <img
            className='cursor-pointer size-auto'
            src={assets.instagram_icon}
            alt=''
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
