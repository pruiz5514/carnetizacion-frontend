import Scanner from '../../../../Components/Organisms/Scanner'
import EstablishmentLayout from './EstablishmentLayout'

export default function EstablishmentDashboard() {
  return (
    <EstablishmentLayout>
      <section className='flex flex-col gap-5'>
        <h1 className="text-5xl text-center">Escanear estudiante</h1>
        <div className='w-full min-w-[300px] max-w-[800px] mx-auto max-h-[600px]'>
          <Scanner/>
        </div>
       
      </section>
        
    </EstablishmentLayout>
  )
}
