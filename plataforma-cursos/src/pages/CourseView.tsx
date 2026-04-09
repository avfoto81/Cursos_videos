import React, { useState } from 'react'; // Adicionamos o { useState } aqui
import { ChevronLeft, Play, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
// Objeto que centraliza todos os cursos e suas aulas
const coursesData: Record<string, { 
  title: string; 
  lessons: { id: number; title: string; duration: string; videoId: string }[] 
}> = {
  "1": {
    title: "Vencendo a Ansiedade",
    lessons: [
      { id: 1, title: "Dez poemas até você", duration: "22:19", videoId: "S5-uWaEq_9I?si=_5bmI8BtNAGQWvsa" },
      { id: 2, title: "Ganhar e perder", duration: "06:05", videoId: "dP-y_ATYXBM?si=dbVMCtKE6TgXoWKw" },
      { id: 3, title: "A arte de esquecer", duration: "03:15", videoId: "dEOQTR29FDo?si=GmXImmE3DC_HzUuJ" },
    ]
  },
  "2": {
    title: "Equilíbrio Emocional",
    lessons: [
      { id: 1, title: "Introdução ao Equilíbrio", duration: "15:00", videoId: "id_aula_01" },
      { id: 2, title: "Gestão de Emoções", duration: "20:00", videoId: "id_aula_02" },
    ]
  },
  // Você pode adicionar os IDs 3, 4 e 5 aqui seguindo o mesmo padrão...
};









const CourseView = () => {
  const { id } = useParams();

  // 1. Buscamos os dados do curso atual com base no ID da URL (fallback para o curso 1 se não achar)
  const currentCourse = coursesData[id || "1"] || coursesData["1"];

  // 2. Estado para controlar qual aula está ativa (inicia na primeira aula)
  const [activeLesson, setActiveLesson] = useState(currentCourse.lessons[0]);

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-secondary font-sans">
      {/* Navbar Superior */}
      <nav className="px-8 py-6 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b border-secondary/5">
        <Link to="/" className="flex items-center gap-2 text-secondary/60 hover:text-primary transition-all group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar ao Dashboard</span>
        </Link>
        
        <div className="text-center px-4">
          <h2 className="text-xl md:text-2xl font-serif italic text-secondary font-semibold">
            {currentCourse.title}
          </h2>
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden shadow-sm">
          <img src="/Daniel.png" alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 p-8">
        
        {/* Coluna da Esquerda: Player Dinâmico */}
        <div className="lg:col-span-2 space-y-10">
          <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-white">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeLesson.videoId}?rel=0&modestbranding=1`}
              title={activeLesson.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="space-y-6 px-4">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Aula {activeLesson.id}
              </span>
              <span className="text-secondary/40 text-[10px] uppercase tracking-widest flex items-center gap-1">
                <Clock className="w-3 h-3" /> {activeLesson.duration}
              </span>
            </div>
            
            <h1 className="text-4xl font-serif text-secondary font-bold leading-tight">
              {activeLesson.title}
            </h1>
            
            <p className="text-secondary/70 text-lg leading-relaxed font-light">
              Nesta sessão de "{currentCourse.title}", Daniel Camaforte aprofunda os conhecimentos sobre 
              <strong> {activeLesson.title}</strong>, trazendo insights práticos para o seu dia a dia.
            </p>
          </div>
        </div>

        {/* Coluna da Direita: Playlist Dinâmica */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-secondary/5 sticky top-32">
            <h3 className="text-sm font-bold text-secondary/30 uppercase tracking-[0.3em] mb-8">Conteúdo do Módulo</h3>
            
            <div className="space-y-4">
              {currentCourse.lessons.map((lesson) => (
                <div 
                  key={lesson.id} 
                  onClick={() => setActiveLesson(lesson)} // Troca a aula ao clicar
                  className={`p-4 rounded-2xl transition-all cursor-pointer border flex items-center justify-between group
                    ${activeLesson.id === lesson.id 
                      ? 'bg-[#fcfaf6] border-primary/30 shadow-inner' 
                      : 'bg-transparent border-transparent hover:bg-[#fcfaf6] hover:border-secondary/10'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-serif italic transition-all
                      ${activeLesson.id === lesson.id ? 'bg-primary text-white' : 'bg-secondary/5 text-secondary/30 group-hover:bg-secondary/10'}`}>
                      {lesson.id}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${activeLesson.id === lesson.id ? 'text-secondary' : 'text-secondary/60'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-[10px] text-secondary/30 font-bold uppercase">{lesson.duration}</p>
                    </div>
                  </div>
                  {activeLesson.id > lesson.id && <CheckCircle className="w-5 h-5 text-primary/40" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
  };

export default CourseView;



