import { useEffect } from 'react';

export default function AdSlot({ label = 'Ad' }) {
  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [clientId]);

  if (!clientId) {
    return (
      <div className="panel">
        <p className="text-sm text-slate-400">
          Add your AdSense ID in .env
        </p>
      </div>
    );
  }

  return (
    <div className="panel">
      <p className="mb-3 text-xs text-slate-500 uppercase">{label}</p>

      <ins
        className="adsbygoogle block min-h-24"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={import.meta.env.VITE_ADSENSE_AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
