import { Play, Clock, ChevronRight, Lock } from 'lucide-react'; // 1. Adicionado o Lock aqui

interface Course {
    id: number;
    title: string;
    sessions: string;
    image: string;
    tag: string;
    progress?: number;
    locked?: boolean;
}

const courses: Course[] = [
    { id: 1, title: "Vencendo a Ansiedade", sessions: "07 aulas", image: "/capas/Daniel_01.png", tag: "Mindfulness", progress: 45 },
    { id: 2, title: "Equilíbrio Emocional", sessions: "08 aulas", image: "/capas/Daniel_02.png", tag: "Inteligência", progress: 10 },
    { id: 3, title: "Relacionamentos Saudáveis", sessions: "15 aulas", image: "/capas/Daniel_03.png", tag: "Social", progress: 0 },
    { id: 4, title: "Foco e Produtividade", sessions: "12 aulas", image: "/capas/Daniel_04.png", tag: "Performance", progress: 0 },
    { id: 5, title: "Espiritualidade", sessions: "12 aulas", image: "/capas/Daniel_02.png", tag: "Espiritualidade", progress: 0 },
];

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#fcfaf6] pb-20">
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
                        src="/van_gogh.jpg"
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
                        <div key={course.id} className="group relative flex flex-col cursor-pointer">
                            {/* Container da Imagem com Sombra e Bordas Arredondadas */}
                            <div className="relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-secondary/5 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    group-hover:shadow-[0_20px_50px_rgba(227,203,133,0.3)] 
                    transition-all duration-500 group-hover:-translate-y-2 border border-white/20">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${course.locked ? 'grayscale opacity-50' : ''}`}
                                />

                                {/* Overlay de Gradiente Moderno (Escurece apenas a base para o título) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Tag de Categoria com Estilo "Glassmorphism" */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/30 tracking-widest uppercase">
                                        {course.tag}
                                    </span>
                                </div>

                                {/* Ícone de Play Central que "Pulsa" no Hover */}
                                {!course.locked && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                        <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                                            <Play className="fill-current w-7 h-7 translate-x-0.5" />
                                        </div>
                                    </div>
                                )}

                                {/* Título e Progresso DENTRO da capa (Visual Moderno) */}
                                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="font-serif text-xl text-white font-bold leading-tight drop-shadow-md">
                                        {course.title}
                                    </h4>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-[10px] text-white/70 font-medium uppercase tracking-tighter flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {course.sessions}
                                        </span>
                                        {course.progress !== undefined && course.progress > 0 && (
                                            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md border border-primary/30">
                                                {course.progress}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Barra de Progresso Minimalista Neon */}
                                    {!course.locked && course.progress !== undefined && course.progress > 0 && (
                                        <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary shadow-[0_0_8px_rgba(227,203,133,0.8)] transition-all duration-1000 ease-out"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Overlay para Vídeos Bloqueados */}
                                {course.locked && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/20 backdrop-blur-[2px]">
                                        <Lock className="text-white/80 w-8 h-8" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;