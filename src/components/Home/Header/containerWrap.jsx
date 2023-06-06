import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mySignBlue from '../../../../public/assets/mySignBlue.png';
function containerWrap() {
	return (
		<div className='container-wrap'>
			<div className='container-left'>
				<div className='container-signature'>
					<Image src={mySignBlue} alt='Kris signature' className='mySignature' />
				</div>
			</div>
			<div className='container-right'>
				<div className='menu'>
					<Link href='/#projects' className='menu-parts'>
						<div className='text'>projects</div>
						<div className='dot' />
					</Link>
					<Link href='/#skills' className='menu-parts'>
						<div className='text'>skills</div>
						<div className='dot' />
					</Link>
					<Link href='/#values' className='menu-parts'>
						<div className='text'>values</div>
						<div className='dot' />
					</Link>
					<Link href='/#about' className='menu-parts'>
						<div className='text'>about</div>
						<div className='dot' />
					</Link>
					<Link href='/#contact' className='menu-parts'>
						<div className='text'>contact</div>
						<div className='dot' />
					</Link>
				</div>
				<div className='line' />
			</div>
		</div>
	);
}

export default containerWrap;
