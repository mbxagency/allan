# Allan da Silva Queiroz - Portfolio Profissional

Um site portfolio profissional moderno e responsivo desenvolvido para Allan da Silva Queiroz, apresentando sua experiência na área comercial farmacêutica, conquistas e habilidades de vendas.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Modal de Resume**: Formulário para atualização de informações de contato
- **Animações**: Efeitos visuais e transições elegantes
- **Formulário de Contato**: Sistema de envio de mensagens
- **Download CV**: Botão para download do currículo em PDF
- **Performance Otimizada**: Carregamento rápido e eficiente

## 📋 Seções do Site

### 1. **Header/Navegação**
- Menu fixo com navegação suave
- Botão especial para atualização de resume
- Design responsivo com menu hamburger para mobile

### 2. **Hero Section**
- Apresentação principal com nome e título profissional
- Descrição focada em vendas farmacêuticas
- Botões de call-to-action
- Card de perfil com estatísticas comerciais

### 3. **Sobre Mim**
- Descrição pessoal e profissional na área comercial
- Destaques de competências de vendas
- Cards interativos com ícones

### 4. **Experiência Profissional**
- Timeline cronológica
- Detalhes de cada posição na área comercial
- Competências e responsabilidades
- Design alternado (esquerda/direita)

### 5. **Conquistas**
- Conquistas comerciais destacadas
- Métricas de sucesso em vendas
- Produtos e estratégias utilizadas
- Cards com hover effects

### 6. **Educação**
- Formação acadêmica
- Cursos e especializações
- Layout responsivo em grid

### 7. **Skills & Competências**
- Categorias organizadas (Habilidades Comerciais, Gestão, Relacionamento, Especialidades)
- Barras de progresso animadas
- Layout responsivo em grid

### 8. **Contato**
- Informações de contato
- Formulário funcional
- Validação de campos
- Notificações de sucesso

### 9. **Modal de Resume**
- Formulário para atualização de dados
- Campos: Endereço, Telefone, Email, LinkedIn
- Atualização em tempo real das informações

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox e Grid para layout
  - Gradientes e sombras
  - Animações e transições
  - Media queries para responsividade
- **JavaScript Vanilla**:
  - Manipulação do DOM
  - Event listeners
  - Animações customizadas
  - Validação de formulários
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Inter
- **ReportLab**: Geração de PDF do currículo

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🎨 Design System

### Cores Principais
- **Azul Primário**: #2563eb
- **Azul Secundário**: #1d4ed8
- **Cinza Escuro**: #1f2937
- **Cinza Médio**: #6b7280
- **Cinza Claro**: #f8fafc

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Tamanhos**: 0.9rem - 3.5rem
- **Pesos**: 300, 400, 500, 600, 700

## ⚡ Funcionalidades JavaScript

### Navegação
- Smooth scrolling entre seções
- Header com efeito de scroll
- Menu mobile responsivo

### Modal de Resume
- Abertura/fechamento suave
- Preenchimento automático dos campos
- Atualização em tempo real das informações
- Validação de formulário

### Animações
- Intersection Observer para animações no scroll
- Contadores animados
- Barras de progresso
- Efeitos hover

### Formulários
- Validação em tempo real
- Formatação automática de telefone
- Notificações de sucesso/erro
- Limpeza automática após envio

### Download CV
- Geração automática de PDF
- Download direto do currículo
- Formatação profissional

### Utilitários
- Botão "Voltar ao topo"
- Notificações toast
- Compartilhamento de perfil
- Tema escuro (preparado)

## 📁 Estrutura de Arquivos

```
allan/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Documentação
└── CV [Allan Queiroz] (1).pdf  # CV original
```

## 🚀 Como Usar

1. **Visualização Local**:
   ```bash
   # Abrir o arquivo index.html em um navegador
   open index.html
   ```

2. **Servidor Local** (recomendado):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (se tiver http-server instalado)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Acessar**: `http://localhost:8000`

## 📝 Personalização

### Atualizar Informações
1. Editar dados no arquivo `script.js` (variável `resumeData`)
2. Modificar conteúdo no `index.html`
3. Ajustar estilos no `styles.css`

### Adicionar Novas Conquistas
1. Copiar estrutura do `.case-card`
2. Atualizar conteúdo e imagens
3. Ajustar métricas e produtos

### Modificar Skills
1. Editar arrays de skills no HTML
2. Ajustar porcentagens nas barras de progresso
3. Adicionar novas categorias se necessário

## 🔧 Funcionalidades Avançadas

### Modal de Resume
- **Abertura**: Clique no botão "Resume" no header
- **Campos**: Endereço, Telefone, Email, LinkedIn
- **Validação**: Campos obrigatórios
- **Atualização**: Informações atualizadas em tempo real

### Formulário de Contato
- **Validação**: Campos obrigatórios
- **Formatação**: Telefone automático
- **Feedback**: Notificações de sucesso
- **Limpeza**: Formulário resetado após envio

### Download CV
- **Geração**: PDF automático com formatação profissional
- **Download**: Botão direto na seção hero
- **Conteúdo**: Todas as informações do site organizadas

### Animações
- **Scroll**: Elementos aparecem conforme scroll
- **Contadores**: Números animados
- **Barras**: Progresso animado
- **Hover**: Efeitos nos cards

## 📊 Performance

- **Carregamento**: Otimizado para velocidade
- **Imagens**: Ícones SVG/Font Awesome
- **CSS**: Minificado e organizado
- **JavaScript**: Vanilla JS sem dependências

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Versões**: Suporte a navegadores modernos

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email**: allansqueiroz@hotmail.com
- **Telefone**: (41) 9 9707-1091
- **LinkedIn**: linkedin.com/in/allanqueiroz

## 📄 Licença

Este projeto é de uso pessoal e profissional de Allan da Silva Queiroz.

---

**Desenvolvido com ❤️ para apresentar o perfil comercial de forma moderna e impactante.** 