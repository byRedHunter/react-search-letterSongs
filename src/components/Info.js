import React from 'react'

export const Info = ({ info }) => {
	if (Object.keys(info).length === 0) return null

	const { strArtistThumb, strGenre, strBiographyES, strBiographyEN } = info

	return (
		<div className='card border-light'>
			<div className='card-header bg-primary text-lifht font-weight-bold'>
				Informacion Artista
			</div>

			<div className='card-body'>
				<img src={strArtistThumb} alt='Logo Artista' />
				<p className='card-text'>Género: {strGenre}</p>
				<p className='card-text'>Biografia:</p>
				<p className='card-text'>{strBiographyES || strBiographyEN}</p>

				<p className='card-text social'>
					{info.strFacebook && (
						<a
							href={`https://${info.strFacebook}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-facebook'></i>
						</a>
					)}

					{info.strTwitter && (
						<a
							href={`https://${info.strTwitter}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-twitter'></i>
						</a>
					)}

					{info.strLastFMChart && (
						<a
							href={`https://${info.strLastFMChart}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-lastfm'></i>
						</a>
					)}
				</p>
			</div>
		</div>
	)
}
