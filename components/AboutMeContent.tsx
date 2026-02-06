
import React from 'react';

const AboutMeContent: React.FC = () => {
  return (
    <div className="text-medium-gray leading-relaxed space-y-4">
      <p>
        <strong>Olá! Eu sou o Danilo Reis.</strong>
      </p>
      <p>
        Sou estudante do último semestre de Análise e Desenvolvimento de Sistemas e um entusiasta da cultura data-driven. Atualmente, foco meu desenvolvimento em três pilares fundamentais para criar soluções tecnológicas de alto impacto:
      </p>
      <ul className="list-disc list-inside space-y-3 pl-2">
        <li>
          <strong>Análise e Engenharia de Dados:</strong> Especialista em transformar dados brutos em insights. Utilizo Python (Pandas, NumPy) para tratamento e limpeza, e bibliotecas como Matplotlib, Seaborn e Plotly para visualização. Para o storytelling, construo dashboards interativos no Power BI e aplicações dinâmicas com Streamlit.
        </li>
        <li>
          <strong>Bancos de Dados:</strong> Experiência com modelagem SQL e NoSQL (MySQL, Firebase), priorizando performance, normalização e escalabilidade.
        </li>
        <li>
          <strong>Desenvolvimento de Software:</strong> Atuação versátil no desenvolvimento de APIs, automações, processos de ETL e aplicações web (Back-end e Front-end), além de explorar soluções No-Code/Low-Code e ambientes em nuvem.
        </li>
      </ul>
      <p>
        Acredito que a tecnologia só atinge seu potencial máximo quando guiada por evidências. Por isso, busco refletir em cada projeto uma abordagem orientada a dados, onde decisões estratégicas e operacionais são fundamentadas em fatos e análises empíricas.
      </p>
    </div>
  );
};

export default AboutMeContent;
