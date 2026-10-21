import { lazy, Suspense, useEffect, useState } from 'react';
import SewingArt from './SewingArt';
const MotionPlayer = lazy(() => import('./MotionPlayer'));

export default function SewingJourney() {
  const [enabled,setEnabled] = useState(false);
  const [paused,setPaused] = useState(false);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setEnabled(!query.matches);setPaused(false); };
    update(); query.addEventListener('change',update);
    return () => query.removeEventListener('change',update);
  },[]);
  return <div className="scene-inner">
    <div className="scene-art" aria-hidden="true">{enabled ? <Suspense fallback={<SewingArt />}><MotionPlayer paused={paused}/></Suspense> : <SewingArt />}</div>
    <span className="art-note">Hecho despacito.<br/><i>Para acompañarte mucho.</i></span>
    <button className="motion-toggle" onClick={() => enabled ? setPaused(!paused) : setEnabled(true)} aria-pressed={enabled && !paused}>{enabled ? paused ? '▷ Reanudar animación' : 'Ⅱ Pausar animación' : '▷ Activar animación'}</button>
  </div>;
}
