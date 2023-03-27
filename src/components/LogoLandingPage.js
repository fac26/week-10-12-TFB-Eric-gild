import Image from 'next/image';

const LogoLandingPage = (props) => {
  return (
    <div className='w-60 h-60 bg-accentcolor4 rounded-full flex items-center justify-center'>
      <div className='w-11/12 h-11/12 rounded-full overflow-hidden flex flex-col justify-center items-center relative'>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default LogoLandingPage;
