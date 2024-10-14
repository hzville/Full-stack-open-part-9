const ErrorMessage = ({ message }:{message: string}) => {
  if (message === ''){
    return null;
  }

  return (
    <div style={{color: 'red'}}>
      {message}
    </div>
  );
};

export default ErrorMessage;