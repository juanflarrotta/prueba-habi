const steps = [
  {
    step: 1,
    path: 'nombre-cliente',
    typeInput: 'text',
    title: 'Nombre y apellido',
    description: 'Queremos saber sobre ti, indicanos tu nombre y tu apellido.',
    key: 'name',
    validate: {
      required: {
        value: true,
        message: '',
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
    typeInput: 'email',
    title: 'Email',
    description: 'Indicanos tu correo electronico.',
    key: 'email',
    validate: {
      required: true,
    },
  },
  {
    step: 3,
    path: 'direccion-inmueble',
    typeInput: 'text',
    title: 'Direccion del inmueble',
    description: 'Indicanos la direccion del inmueble.',
    key: 'adress',
    validate: {
      required: true,
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(steps);
}
