function Message({ type = 'info', children }) {
  let styles;

  switch (type) {
    case 'error':
      styles =
        'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-between mt-2';
      break;
    case 'success':
      styles =
        'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex justify-between mt-2';
      break;
    case 'info':
      styles =
        'bg-slate-100 border border-slate-400 text-slate-700 px-4 py-3 rounded relative flex justify-between mt-2';
      break;
    default:
      styles =
        'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-between mt-2';
      break;
  }

  return (
    <>
      <div className={styles}>
        <span>{children}</span>
      </div>
    </>
  );
}

export default Message;
