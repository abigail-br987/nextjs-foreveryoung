function Section({ children, className = '' }) {
  return (
    <section
      className={`p-10 text-justify border-dark_blue border-2 mb-2 rounded-lg ${className} ${className ? '' : 'bg-white'}`}
    >
      {children}
    </section>
  );
}

export default Section;
