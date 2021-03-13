import React from 'react'

export const Cancion = ({ letra }) => {
	if (letra?.length === 0) return null

	return (
		<>
			<h2 className='text-center'>Letra Canción</h2>
			<p className='letra'>{letra}</p>
		</>
	)
}
