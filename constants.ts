
import type { Project } from './types';

export const PERSONAL_INFO = {
  name: 'Danilo Souza Reis',
  title: 'Dados e Desenvolvimento',
  email: 'reis.souza.danilo@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/danilo-souza-reis-ab61761b6/',
  github: 'https://github.com/danilo-s-reis',
};

export const TECHNOLOGIES: string[] = [
  "Python", "SQL", "NoSQL", "Power BI", "AWS", "Power Platform", 
  "Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn", "Streamlit", 
  "PySpark", "Docker", "Linux", "ETL", "Git", "Shell Script"
];

export const PROJECTS: Project[] = [
  {
    title: 'Trilha AWS Cloud Data Engineer na Compass UOL',
    description: 'Repositório utilizado para desenvolver as atividades e os desafios propostos em cada Sprint no Programa de Bolsas da Compass UOL na trilha AWS Cloud Data Engineering.',
    tags: ['AWS EC2','AWS Glue', 'AWS Athena', 'AWS S3', 'Python', 'SQL', 'ETL','Engenharia de Dados','Análise de Dados'],
    githubUrl: 'https://github.com/danilo-s-reis/aws-cloud-data-engineering',
  },
  {
    title: 'Analytics com Python - Salários na Área de Dados',
    description: 'Dashboard interativo criado com Streamlit para analisar e visualizar dados de salários na área de dados, utilizando bibliotecas como Pandas e Plotly para explorar tendências e insights sobre remuneração, cargos, senioridade e localização geográfica.',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Análise de Dados'],
    githubUrl: 'https://github.com/danilo-s-reis/analytics-python-salarios',
    liveUrl: 'https://analytics-python-portfolio.streamlit.app/',
  },
  {
    title: 'Website de Portfólio',
    description: 'Este site de portfólio, criado para apresentar minhas habilidades e projetos. Design limpo, responsivo e intuitivo.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
    githubUrl: 'https://github.com/danilo-s-reis/dan-portfolio',
    liveUrl: 'https://danilo-reis.vercel.app/',
  },
    {
    title: 'Homepage do Spotify',
    description: 'Recriação estática da homepage do Spotify utilizando HTML, CSS e JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    githubUrl: 'https://github.com/danilo-s-reis/spotify-homepage-recreation',
    liveUrl: 'https://danilo-s-reis.github.io/spotify-homepage-recreation/',
  },
];
