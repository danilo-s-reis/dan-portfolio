
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
    title: 'Pipeline de Dados com AWS',
    description: 'Projeto final do Programa de Bolsas da Compass UOL, construindo um pipeline de dados real com serviços AWS para ingestão, processamento e análise de dados.',
    tags: ['AWS Glue', 'AWS Athena', 'AWS S3', 'Python', 'SQL', 'Engenharia de Dados'],
    githubUrl: 'https://github.com/danilo-s-reis/Compass-UOL-PB',
  },
  {
    title: 'Estudos em Data Science & Analytics',
    description: 'Repositório com notebooks e projetos práticos sobre Data Science e Análise de Dados, utilizando bibliotecas populares de Python.',
    tags: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Jupyter'],
    githubUrl: 'https://github.com/danilo-s-reis/Data-Science-e-Analytics',
  },
  {
    title: 'Website de Portfólio',
    description: 'Este site de portfólio, criado para apresentar minhas habilidades e projetos. Design limpo, responsivo e intuitivo.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
    githubUrl: 'https://github.com/danilo-s-reis',
  },
    {
    title: 'Projeto Pedagógico FATEC',
    description: 'Desenvolvimento de projeto acadêmico como parte da grade curricular do curso de Análise e Desenvolvimento de Sistemas na FATEC Zona Sul.',
    tags: ['Acadêmico', 'ADS', 'Software'],
    githubUrl: 'https://github.com/danilo-s-reis',
  },
];
