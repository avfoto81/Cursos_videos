import { Play, Clock, ChevronRight } from 'lucide-react';

const courses = [
  { id: 1, title: "Vencendo a Ansiedade", sessions: "12 aulas", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=900", tag: "Mindfulness" },
  { id: 2, title: "Equilíbrio Emocional", sessions: "08 aulas", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600&h=900", tag: "Inteligência" },
  { id: 3, title: "Relacionamentos Saudáveis", sessions: "15 aulas", image: "https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=600&h=900", tag: "Social" },
  { id: 4, title: "Foco e Produtividade", sessions: "10 aulas", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600&h=900", tag: "Performance" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral pb-20">
      {/* Header Minimalista */}
      <header className="px-8 py-10 flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl text-secondary font-semibold italic">Olá, André</h1>
          <p className="text-secondary/60 font-sans text-sm tracking-wide uppercase mt-1">Continue sua jornada de autoconhecimento</p>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
          <img src="/Daniel.png" alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Destaque (Banner Principal Estilo Streamer) */}
      <section className="px-8 mb-16">
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1528319725582-ddc0b6a27666?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Destaque"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent flex flex-col justify-center px-12">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter">Novo Curso</span>
            <h2 className="text-white font-serif text-5xl max-w-md mb-4 leading-tight">O Poder da Resiliência</h2>
            <p className="text-white/80 max-w-sm mb-8 font-sans leading-relaxed">Descubra como transformar desafios em degraus para o seu crescimento pessoal com Daniel Camaforte.</p>
            <button className="flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all w-fit shadow-lg group">
              <Play className="fill-current w-5 h-5" />
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Trilhas de Cursos (Vertical Cards) */}
      <section className="px-8 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-serif text-secondary font-medium">Meus Cursos</h3>
          <a href="#" className="text-primary font-semibold text-sm flex items-center hover:underline">Ver tudo <ChevronRight className="w-4 h-4" /></a>
        </div>

        {/* Grid de Cards Verticais */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer">
              {/* Card da Imagem Vertical */}
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border border-secondary/5">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay de Hover */}
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                    <Play className="fill-current w-6 h-6" />
                  </div>
                </div>
                {/* Tag no Card */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                  {course.tag}
                </span>
              </div>
              
              {/* Informações */}
              <div className="mt-4 space-y-1">
                <h4 className="font-sans font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-1">{course.title}</h4>
                <div className="flex items-center gap-2 text-xs text-secondary/50 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>{course.sessions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;