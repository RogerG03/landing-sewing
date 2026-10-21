import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import SewingArt from './SewingArt';
const MotionPlayer = lazy(() => import('./MotionPlayer'));

export default function SewingJourney({ scene = 'journey' }) {
  const host = useRef(null);
  const posterFrame = {journey:45,machine:45,zipper:345,embroidery:599}[scene];
  const [enabled,setEnabled] = useState(false);
  const [paused,setPaused] = useState(false);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setEnabled(!query.matches);setPaused(false); };
    update(); query.addEventListener('change',update);
    return () => query.removeEventListener('change',update);
  },[]);
  return <div className="scene-inner" ref={host}>
    <div className="scene-art" aria-hidden="true">{enabled ? <Suspense fallback={<SewingArt frame={posterFrame}/>}><MotionPlayer paused={paused} scene={scene} host={host}/></Suspense> : <SewingArt frame={posterFrame}/>}</div>
    {scene === 'journey' && <span className="art-note">Hecho despacito. <i>Para acompañarte mucho.</i></span>}
    <button className="motion-toggle" onClick={() => enabled ? setPaused(!paused) : setEnabled(true)} aria-pressed={enabled && !paused}>{enabled ? paused ? '▷ Reanudar animación' : 'Ⅱ Pausar animación' : '▷ Activar animación'}</button>
  </div>;
}
