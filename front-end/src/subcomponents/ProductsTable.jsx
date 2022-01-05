export default function ProductsTable(props) {
  const { data } = props
  const [products, setProducts] = useState(data) 
  const [total, setTotal] = useState(0)
 
  const removeItem = (item) => {
    const newCart = products.filter(product => product.item !== item)
    setProducts(newCart)
  }

  const calculateTotal = () => {
    const total = products.reduce((acc, { price, quantity }) => {
      return acc + (price * quantity)
    }, 0)
    setTotal(total)
  }

  useEffect(() => {
    calculateTotal()
  }, [products])
  
  return (
    <div className="products-table">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={product.item}>
              <td data-testid={`customer_checkout__element-order-table-item-number-${index}`}>{index + 1}</td>
              <td data-testid={`customer_checkout__element-order-table-name-${index}`}>{product.description}</td>
              <td data-testid={`customer_checkout__element-order-table-quantity-${index}`}>{product.quantity}</td>
              <td data-testid={`customer_checkout__element-order-table-unit-price-${index}`}>{product.price}</td>
              <td data-testid={`customer_checkout__element-order-table-sub-total-${index}`}>{product.price * quantity}</td>
              <button 
                data-testid={`customer_checkout__element-order-table-remove-${index}`}
                onClick={() => removeItem(product.item)}
              >
                Remover
              </button>
            </tr>
          ))}
        </tbody>    
    </table>
    <div className="total">
      <span data-testid="customer_checkout__element-order-total-price">Total: R$ {total}</span>
    </div>
  </div>
  )
}