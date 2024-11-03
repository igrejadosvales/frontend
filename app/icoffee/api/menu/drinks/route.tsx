export async function GET() {
  const drinks = [
    {
      id: 1,
      title: 'Energético Monster',
      subtitle: 'Tradicional',
      price: "R$ 12,00",
      backgroundColor: '#FFE6D4',
      textColor: '#FF6A00',
    },
    {
      id: 2,
      title: 'Café (em capsula)',
      subtitle: 'Café de máquina',
      price: "R$ 12,00",
      backgroundColor: '#E6B5AC',
      textColor: '#3B1E1A',
    },
    {
      id: 3,
      title: 'Café',
      subtitle: 'Café passado',
      price: "R$ 10,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    },
    {
      id: 4,
      title: 'Água Mineral',
      subtitle: 'Sem gás',
      price: "R$ 4,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    },
    {
      id: 5,
      title: 'Água Mineral',
      subtitle: 'Com gás',
      price: "R$ 4,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    },
    {
      id: 6,
      title: 'Refrigerante',
      subtitle: 'Coca-cola',
      price: "R$ 6,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    },
    {
      id: 9,
      title: 'Refrigerante',
      subtitle: 'Coca-cola Zero',
      price: "R$ 6,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    },
    {
      id: 7,
      title: 'Refrigerante',
      subtitle: 'Guaraná',
      price: "R$ 6,00",
      backgroundColor: '#D4FFEB',
      textColor: '#2E9F6B',
    }
  ]

  return new Response(JSON.stringify(drinks), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });;
}