import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Formulario } from './components/Formulario'
import { Cancion } from './components/Cancion'
import { Info } from './components/Info'

function App() {
	const [busquedaLetra, setBusquedaLetra] = useState({})
	const [letra, setLetra] = useState('')
	const [informacion, setInformacion] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (Object.keys(busquedaLetra).length === 0) return

		setLoading(true)
		const consultarApiLetra = async () => {
			const { artista, cancion } = busquedaLetra
			const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
			const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

			const [letra, informacion] = await Promise.all([axios(url), axios(url2)])

			if (letra && informacion) {
				setLetra(letra.data.lyrics)
				setInformacion(informacion.data.artists[0])
			} else {
				setLetra('')
				setInformacion({})
			}
			setLoading(false)
		}
		consultarApiLetra()
	}, [busquedaLetra])

	return (
		<>
			<Formulario setBusquedaLetra={setBusquedaLetra} />

			{loading && (
				<p className='mt-4 alert alert-warning text-center'>Buscando...</p>
			)}

			<div className='container mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						<Cancion letra={letra} />
					</div>
					<div className='col-md-6'>
						<Info info={informacion} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
