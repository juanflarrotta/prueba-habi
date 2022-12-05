const steps = [
  {
    step: 1,
    path: 'nombre-cliente',
    optionInputs: [],
    typeInput: 'text',
    title: 'Nombre y apellido',
    description: 'Queremos saber sobre ti, indicanos tu nombre y tu apellido.',
    key: 'name',
    optionsRadio: [],
    validate: {
      required: {
        value: true,
        message: 'Se necesita un nombre',
      },
      minLength: {
        value: 3,
        message: 'Debe contener mas de 3 letras',
      },
    },
  },
  {
    step: 2,
    path: 'email-cliente',
    optionInputs: [],
    typeInput: 'email',
    title: 'Email',
    description: 'Indicanos tu correo electronico.',
    key: 'email',
    optionsRadio: [],
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },

  {
    step: 3,
    path: 'direccion-inmueble',
    optionInputs: [],
    typeInput: 'text',
    title: 'Direccion del inmueble',
    description: 'Indicanos la direccion del inmueble.',
    key: 'adress',
    optionsRadio: [],
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
  {
    step: 4,
    path: 'numero-piso',
    optionInputs: [],
    typeInput: 'number',
    title: 'Numero de piso',
    description: 'Indicanos el numero de piso que se encuentra el inmueble.',
    key: 'flat',
    optionsRadio: [],
    validate: {
      required: {
        value: true,
        message: '',
      },
      max: {
        value: 50,
        message: 'Debe ser menor o mayor a 50',
      },
    },
  },
  {
    step: 5,
    path: 'zonas-inmueble',
    optionInputs: ['Zona BBQ', 'Salon comunal', 'Parque de juegos'],
    typeInput: 'checkbox',
    title: 'Zonas del inmueble',
    description: 'Indicanos las zonas de tu inmueble.',
    key: 'areas',
    optionsRadio: [],
    validate: {
      required: {
        value: false,
        message: '',
      },
    },
  },
  {
    step: 6,
    path: 'parqueadero',
    optionInputs: [],
    typeInput: 'radio',
    title: '¿El inmueble cuenta con parqueadero?',
    description: 'Indicanos si tiene parqueadero el inmueble.',
    key: 'parking',
    optionsRadio: [
      {
        text: 'Si',
        inputs: ['Es cubierto', 'No es cubierto'],
      },
      {
        text: 'No',
        inputs: [],
      },
    ],
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
  {
    step: 7,
    path: 'monto-inmueble',
    optionInputs: [],
    typeInput: 'currency',
    title: 'Precio del inmueble',
    description: 'Indicanos el valor del inmueble.',
    key: 'monto',
    optionsRadio: [],
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
  {
    step: 8,
    path: 'imagen-inmueble',
    optionInputs: [],
    typeInput: 'file',
    title: 'Foto',
    description: 'Sube una foto de tu inmueble.',
    key: 'picture',
    optionsRadio: [],
    validate: {
      required: {
        value: false,
        message: '',
      },
    },
  },
  {
    step: 9,
    path: 'ascensor',
    optionInputs: [],
    typeInput: 'radio',
    title: 'Ascensor',
    description: '¿El conjunto tiene ascensor?',
    key: 'lift',
    optionsRadio: [
      {
        text: 'Si',
        inputs: [],
      },
      {
        text: 'No',
        inputs: [],
      },
    ],
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(steps);
}
