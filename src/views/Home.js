import React, { Component } from 'react';

const exampleImage = require('../img/example.jpg');

export default class Home extends Component {
  render() {
    const WIDTH = document.documentElement.clientWidth;
    return (
      <div
        style={{
          border: 'solid',
          borderRadius: 8,
          width: { WIDTH },
          margin: 10,
          padding: 5
        }}
      >
        <h2>Facial Recognition App</h2>
        <h4>
          POC Reconocimiento Facial: ReactJS (face-api.js, tensorflow){' '}
          <a href="https://github.com/justadudewhohacks/face-api.js">
            face-api.js
          </a>{' '}
          (simulando el back-end con un fichero /descriptors/images.json)
        </h4>
        <img src={exampleImage} alt="example" width="600" />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            margin: 'auto',
            marginLeft: 10
          }}
        >
          <h3>Procedimiento</h3>
          <p>
            Se ha de registrar una imagen, bien desde el PC o a través de url, una vez detectado el rostro podremos detectarlo.
          </p>
          <div>
            <ul>
              <h4>Reconocimiento</h4>
              <li>
                Cargamos imagen y el proceso intentará detectar el rostro.
              </li>
              <li>Si hay éxito, aparecerá dicha imagen con el rostro recuadrado y la leyenda Face Detect</li>
              <li>Podemos visualizar los descriptores devueltos por face-api clickando en Show Descriptor</li>
              <li>Copiamos dicho contenido y lo escribimos en el fichero images.json con el formato establecido. Cuantos más descriptores tenga un miembro más fácil seerá la detección.</li>
              <li>Arrancamos de nuevo la app 'npm start' para cargar los nuevos datos.</li>
            </ul>
            <ul>
              <h4>Detección</h4>
              <li>Se muestra la cámara</li>
              <li>Si existe datos en el fichero anterior, cuando se detecte una cara aparecerá una leyenda identificado al usuario.</li>
              <li>El nivel de finidad en la detección se puede ajustar en face-api.js (scoreThreshold, por defecto 0.5)
              </li>
            </ul>
            <ul>
              <h4>Reference:</h4>
              <li>
                {' '}
                <a href="http://gitlab-val.es.capgemini.com/gitlab/aparreno/recognition-facial">
                  Código
                </a>
              </li>
              <li>
                Sugerencias:{' '}
                <a href="mailto:alejandro.parreno-saiz@capgemini.com">
                  por email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
