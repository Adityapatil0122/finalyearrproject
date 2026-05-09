export default function Section({
  id,
  children,
  className = '',
  container = true,
  bleed = false,
  as: Tag = 'section',
}) {
  return (
    <Tag id={id} className={['relative py-2xl md:py-[86px]', className].join(' ')}>
      {bleed ? children : container ? <div className="container-page">{children}</div> : children}
    </Tag>
  );
}
