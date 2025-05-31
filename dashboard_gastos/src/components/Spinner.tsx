import './Spinner.css'

export const Spinner = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
        <span className="loader"></span>
        <p>Cargando...</p>
    </div>
  )
}
