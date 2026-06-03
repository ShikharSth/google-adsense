import AdSlot from '../components/AdSlot';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <div className='panel mb-5 text-center font-semibold text-slate-300 text-lg tracking-widest'>
        <a href='/'><span className='hover:text-slate-400'>Home</span></a> <span className='font-thin'>|</span> <span className='cursor-pointer hover:text-slate-400'>Contact</span>
      </div>
      <div className="panel">
        <h1 className="text-4xl font-bold ">Contact</h1>

        <p className="mt-6 text-slate-300">
          Email: shtshikhar12@gmail.com
          Phone: N/A
          Address: N/A
        </p>
      </div>
      <div className="mt-5 panel">
        <AdSlot label="Sidebar Ad" />
      </div>
    </div>
  );
}
