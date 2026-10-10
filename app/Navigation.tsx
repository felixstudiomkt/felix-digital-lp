'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target) && !button.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <><button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}><span /><span /></button><nav ref={nav} id="main-navigation" className={`main-navigation ${open ? 'is-open' : ''}`} aria-label="Navegação principal"><Link href="/#empresa" onClick={() => setOpen(false)}>Empresa</Link><Link href="/solucoes" aria-current={path.startsWith('/solucoes') ? 'page' : undefined} onClick={() => setOpen(false)}>Soluções</Link><Link href="/projetos" aria-current={path === '/projetos' ? 'page' : undefined} onClick={() => setOpen(false)}>Projetos</Link><Link href="/contato" aria-current={path === '/contato' ? 'page' : undefined} onClick={() => setOpen(false)}>Contato</Link><Link className="mobile-nav-cta" href="/contato" onClick={() => setOpen(false)}>Vamos conversar ↗</Link></nav></>;
}
