export async function GET() {
  const drinks = [
    {
      id: 1,
      title: 'Matheus',
      subtitle: 'Tradicional',
      price: "R$ 12,00",
      backgroundColor: '#FFE6D4',
      textColor: '#FF6A00',
    },
    {
      id: 2,
      title: 'Energético Monster',
      subtitle: 'Zero açucar',
      price: "R$ 12,00",
      backgroundColor: '#000',
      textColor: '#fff',
    },
    {
      id: 3,
      title: 'Energético Baly',
      subtitle: 'Abacaxi e Hortelã',
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