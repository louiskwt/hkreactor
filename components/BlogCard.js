import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
	const { title, slug, thumbnail } = blog.fields;

	return (
		<div className='card'>
			<div className='featured'>
				<Image
					src={'https:' + thumbnail.fields.file.url}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
				/>
			</div>
			<div className='content'>
				<div className='info'>
					<h4>{title}</h4>
				</div>
				<div className='actions'>
					<Link href={'/blogs/' + slug}>
						<a>Read</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
