const steps = [
  {
    step: 1,
    path: 'nombre-cliente',
    typeInput: 'text',
    title: 'Nombre y apellido',
    description: 'Queremos saber sobre ti, indicanos tu nombre y tu apellido.',
    key: 'name',
    validate: {
      required: true,
      minLength: 3,
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
];

export default function handler(req, res) {
  res.status(200).json(steps);
}
