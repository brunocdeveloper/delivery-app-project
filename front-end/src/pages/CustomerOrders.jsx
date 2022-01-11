import React from 'react';
import NavBar from '../components/NavBar';
import CustomerCardOrder from '../components/CustomerCardOrder';

export default function CustomerOrders() {
  const arrOrders = [
    {
      id: 1,
      Pedido: '001',
      status: 'PENDENTE',
      saleDate: '08/04/21',
      totalPrice: 'R$ 23,80',
    },
    {
      id: 2,
      Pedido: '002',
      status: 'PREPARANDO',
      saleDate: '08/04/21',
      totalPrice: 'R$ 14,20',
    },
    {
      id: 3,
      Pedido: '003',
      status: 'ENTREGUE',
      saleDate: '07/04/21',
      totalPrice: 'R$ 28,46',
    },
  ];

  // const { orders, setOrders } = useContext(AppContext);

  const section1 = {
    name: 'PRODUTOS',
  };

  const section2 = {
    name: 'MEUS PEDIDOS',
  };

  /* const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const result = await getUserOrders(user.id);
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
  }, []); */

  return (
    <section>
      <NavBar section1={ section1 } section2={ section2 } />
      { arrOrders
        .map((order, index) => <CustomerCardOrder key={ index } order={ order } />) }
    </section>
  );
}
