function Card() {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      width: '250px',
      marginTop: '20px'
    }}>
      <img
        src="https://via.placeholder.com/250x150"
        alt="Product"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h3>Product Title</h3>
      <p>This is a simple product card with image, title, and description.</p>
    </div>
  )
}

export default Card