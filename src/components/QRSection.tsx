import { Camera, Share2 } from 'lucide-react';
import QR from '../assets/QR.svg';

export function QRCodeSection() {
  const driveUrl = 'https://photos.app.goo.gl/j3b5pWgEbd6eq9vaA';

  return (
    <section id="share" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-dancing text-primary mb-4">
            ¡Compartí tus fotos!
          </h2>
          <p className="text-gray-600">
            Escanea el código QR para subir tus fotos a nuestro álbum compartido
          </p>
        </div>

        <div className="rounded-2xl p-8 shadow-lg max-w-md mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <img width={180} height={180} src={QR} />

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Camera className="w-5 h-5" />
                <span className="font-medium">Subí tus recuerdos</span>
              </div>
              <p className="text-sm text-gray-600">
                Apunta con tu cámara al código QR para acceder a nuestro albúm
                compartido.
              </p>
            </div>

            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#b8860b] hover:bg-[#c4a656] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Abrir albúm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
