import customerImage from '../assets/customer.png'

function Testimonial() {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '10px',
      maxWidth: '400px'
    }}>
      <img
        src={customerImage}
        alt="Customer"
        style={{ borderRadius: '50%' }}
      />
      <p>"This service is amazing! I really enjoyed using this app."</p>
      <h4>- John Doe</h4>
    </div>
  )
}

export default Testimonial