import Image from 'next/image';

const LogoLandingPage = (props) => {
  return (
    <div className='w-11/12 h-11/12 rounded-full overflow-hidden flex flex-col justify-center items-center relative mb-4 mt-4'>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default LogoLandingPage;
