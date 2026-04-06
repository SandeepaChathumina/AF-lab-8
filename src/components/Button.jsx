function Button({ text, color, size }) {
  return (
    <button
      style={{
        backgroundColor: color || 'blue',
        color: 'white',
        border: 'none',
        padding: size === 'large' ? '12px 24px' : '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      {text}
    </button>
  )
}

export default Button