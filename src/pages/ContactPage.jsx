import AdSlot from '../components/AdSlot';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <div className='panel mb-5 text-center font-semibold text-slate-300 text-xl'>
        <a href='/'><span>Home</span></a> | <span className='cursor-pointer'>Contact</span>
      </div>
      <div className="panel">
        <h1 className="text-4xl font-bold ">Contact</h1>

        <p className="mt-6 text-slate-300">
          Email: shtshikhar12@gmail.com
        </p>
      </div>
      <div className="mt-5 panel">
        <AdSlot label="Sidebar Ad" />
      </div>
    </div>
  );
}
