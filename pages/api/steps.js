const steps = [
  {
    step: 2,
    path: 'email-cliente',
    optionInputs: [],
    typeInput: 'email',
    optionsRadio: [],
    title: 'Email',
    description: 'Indicanos tu correo electronico.',
    key: 'email',
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
  {
    step: 1,
    path: 'nombre-cliente',
    optionInputs: [],
    typeInput: 'text',
    optionsRadio: [],
    title: 'Nombre y apellido',
    description: 'Queremos saber sobre ti, indicanos tu nombre y tu apellido.',
    key: 'name',
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
    step: 3,
    path: 'direccion-inmueble',
    optionInputs: [],
    typeInput: 'text',
    optionsRadio: [],
    title: 'Direccion del inmueble',
    description: 'Indicanos la direccion del inmueble.',
    key: 'adress',
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
    optionsRadio: [],
    title: 'Numero de piso',
    description: 'Indicanos el numero de piso que se encuentra el inmueble.',
    key: 'flat',
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
    optionsRadio: [],
    title: 'Zonas del inmueble',
    description: 'Indicanos las zonas de tu inmueble.',
    key: 'areas',
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
    optionsRadio: [
      {
        text: 'Si',
        options: ['Es cubierto', 'No es cubierto'],
      },
      {
        text: 'No',
        options: [],
      },
    ],
    title: '¿El inmueble cuenta con parqueadero?',
    description: 'Indicanos si tiene parqueadero el inmueble.',
    key: 'parking',
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
    optionsRadio: [],
    title: 'Precio del inmueble',
    description: 'Indicanos el valor del inmueble.',
    key: 'monto',
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
    optionsRadio: [],
    title: 'Foto',
    description: 'Sube una foto de tu inmueble.',
    key: 'picture',
    validate: {
      required: {
        value: true,
        message: '',
      },
    },
  },
  {
    step: 9,
    path: 'ascensor',
    optionInputs: [],
    typeInput: 'radio',
    optionsRadio: [
      {
        text: 'Si',
        options: [],
      },
      {
        text: 'No',
        options: [],
      },
    ],
    title: 'Ascensor',
    description: '¿El conjunto tiene ascensor?',
    key: 'lift',
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
