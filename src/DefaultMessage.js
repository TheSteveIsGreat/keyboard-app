const DefaultMessage = (props) => {
  const [message, setMessage] = useState (props.startValue || '')
  message.setMessage('Click A Button')
  return (
      <div>
          <p>{message}</p>
      </div>
  )
}

export default DefaultMessage