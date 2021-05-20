import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<header>
				<Link href='/'>
					<a>
						<h1>
							<span>HK</span>
							<span>Reactor</span>
						</h1>
						<h2>Let's code</h2>
					</a>
				</Link>
			</header>

			<div className='page-content'>{children}</div>

			<footer>
				<p>Copyright 2021 HK Reactor :)</p>
			</footer>
		</div>
	);
}
