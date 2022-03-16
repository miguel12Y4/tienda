import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout'

import styles from '../styles/contacto.module.css'





export default function FirstPost() {

	return (
		<>
			<section className={styles.sectionForm}>
				<div className={styles.containerForm}>
					<h2>Formulario de contacto</h2>

					<form name="contact"
						action="/"
						method="POST"
						netlify-honeypot="bot-field"
						data-netlify="true">
						<input type='hidden' name='contact'
							value='contact' />
						<p style={{ display: 'none' }}>
							<label>
								No llenar esto: <input name="bot-field" />
							</label>
						</p>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input type="text" name="nombre" id="nombre" required placeholder="Ingresa tu nombre" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" required placeholder="Ingresa tu email" />
						</div>
						<div>
							<label htmlFor="mensaje">Mensaje</label>
							<textarea name="mensaje" id="mensaje" cols="30" rows="10" required placeholder="Ingresa tu mensaje"></textarea>
						</div>
						<input type="submit" value="Enviar" />
					</form>
				</div>
				<div className={styles.bgForm}>

				</div>
			</section>

		</>
	)
}
