export default function Footer() {
  return (
    <footer className="bg-[#052E16] w-screen p-4 text-white text-left mt-28 xl:mt-0">
      <div className="flex flex-col sm:flex-row items-start justify-around">
        <div className="mb-4 sm:mb-0">
          <img
            src="/assets/gobierno.svg"
            alt="Logo gobierno de México"
            className="w-32 sm:w-40"
          />
        </div>
        <div className="flex flex-col mb-4 sm:mb-0">
          <h1 className="font-bold">Enlaces</h1>
          <a href="https://www.gob.mx/publicaciones" className="underline">
            Publicaciones oficiales
          </a>
          <a href="http://www.ordenjuridico.gob.mx/" className="underline">
            Marco jurídico
          </a>
          <a
            href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml"
            className="underline"
          >
            Plataforma nacional de transparencia
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Síguenos en</h1>
          <a className="underline" href="https://www.facebook.com/gobmexico">
            Facebook
          </a>
          <a className="underline" href="https://twitter.com/GobiernoMX">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
