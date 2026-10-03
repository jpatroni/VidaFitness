/**
 * CAPA DE PRESENTACIÓN · Revela su contenido al entrar en pantalla
 * Usa las clases `.reveal` / `.is-visible` de styles/base.css.
 */
import { useInView } from '../hooks/dom.js';

export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, visible] = useInView({ once: true, threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
