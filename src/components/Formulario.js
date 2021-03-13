import React, { useState } from 'react'

export const Formulario = ({ setBusquedaLetra }) => {
	const [error, setError] = useState(false)
	const [busqueda, setBusqueda] = useState({
		artista: '',
		cancion: '',
	})
	const { artista, cancion } = busqueda

	const actualizarState = ({ target }) => {
		setBusqueda({
			...busqueda,
			[target.name]: target.value,
		})
	}

	const buscarInformacion = (e) => {
		e.preventDefault()

		if (artista.trim() === '' || cancion.trim() === '') {
			setError(true)
			return
		}

		setError(false)
		// pasan al componente principal
		setBusquedaLetra(busqueda)

		setBusqueda({
			artista: '',
			cancion: '',
		})

		document.querySelector('#artista').select()
	}

	return (
		<div className='bg-dark'>
			<div className='container'>
				<div className='row'>
					<form
						className='col card text-white bg-transparent mb-5 pt-5 pb-2'
						onSubmit={buscarInformacion}
					>
						<fieldset>
							<legend className='text-center'>Buscador Letras Canciones</legend>

							{error && (
								<div className='alert alert-danger text-center'>
									Complete ambos campos
								</div>
							)}

							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='artista'>Artista</label>
										<input
											type='text'
											className='form-control'
											name='artista'
											id='artista'
											placeholder='Nombre Artista'
											value={artista}
											onChange={actualizarState}
										/>
									</div>
								</div>

								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='cancion'>Canción</label>
										<input
											type='text'
											className='form-control'
											name='cancion'
											id='cancion'
											placeholder='Nombre Canción'
											value={cancion}
											onChange={actualizarState}
										/>
									</div>
								</div>
							</div>

							<div className='text-center text-md-right mt-4'>
								<button type='submit' className='btn btn-success px-5'>
									Buscar
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	)
}
