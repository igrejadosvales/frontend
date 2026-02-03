# 📖 Página da Bíblia

Uma experiência moderna e interativa para leitura da Bíblia Sagrada, integrada ao seu site.

## ✨ Recursos Implementados

### 🎯 Navegação

- **Seletor de Livros**: Interface intuitiva organizada por testamento (Antigo e Novo)
- **Busca Rápida**: Encontre qualquer livro da Bíblia rapidamente
- **Navegação por Capítulos**: Avance ou retroceda entre capítulos facilmente
- **Grid de Capítulos**: Selecione qualquer capítulo diretamente

### 🎨 Personalização de Leitura

- **Zoom de Texto**: Ajuste o tamanho da fonte (12px - 32px)
- **Zoom de Palavras**: Clique em qualquer palavra para ampliá-la em tela cheia
- **Marcação de Texto**: Destaque versículos com 5 cores diferentes:
  - 🟡 Amarelo
  - 🟢 Verde
  - 🔵 Azul
  - 🌸 Rosa
  - 🟣 Roxo

### � Sistema de Anotações

- **Editor de Texto Rico**: Faça anotações enquanto lê
- **Formatação**: Negrito, itálico, sublinhado
- **Cores de Texto**: 7 cores diferentes para organização
- **Tamanhos de Fonte**: Pequeno, normal, grande e maior
- **Botão Flutuante**: Acesso rápido no canto inferior direito
- **Responsivo**:
  - Desktop: Painel lateral que não atrapalha a leitura
  - Mobile: Painel em tela cheia com opção de minimizar
- **Salvamento Automático**: Notas salvas por capítulo no localStorage

### 💾 Persistência

- **Salvamento Automático**: Marcações e anotações salvas no localStorage
- **Sincronização**: Destaques e notas mantidos entre sessões
- **Por Capítulo**: Cada capítulo tem suas próprias anotações

### 🎭 Animações e UX

- **Transições Suaves**: Animações fluidas entre páginas usando Framer Motion
- **Interface Responsiva**: Funciona perfeitamente em dispositivos móveis e desktop
- **Design Moderno**: Gradientes, efeitos de blur e cores vibrantes
- **Hover Effects**: Interações visuais em todos os elementos

## 🔌 API Utilizada

**Bible API**: `https://bible-api.com/`

- Tradução: **João Ferreira de Almeida** (português)
- Domínio Público
- Acesso gratuito e sem limitações

### Exemplo de uso da API:

```javascript
// Buscar João 3:16 em português
fetch("https://bible-api.com/John+3:16?translation=almeida");

// Buscar capítulo completo
fetch("https://bible-api.com/John 3?translation=almeida");
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 16**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS v4**: Estilização
- **Framer Motion**: Animações
- **Lucide React**: Ícones
- **Local Storage**: Persistência de dados

## 📁 Estrutura de Arquivos

```
src/
├── app/(pages)/biblia/
│   └── page.tsx              # Página principal
└── components/bible/
    ├── BibleSelector.tsx     # Seletor de livros e capítulos
    └── BibleReader.tsx       # Visualizador de versículos
```

## 🎯 Como Usar

1. **Acessar a Bíblia**: Clique em "Bíblia" no menu de navegação
2. **Escolher um Livro**: Use a busca ou navegue pela lista de livros
3. **Selecionar Capítulo**: Clique no livro desejado e escolha o capítulo
4. **Ler e Interagir**:
   - Ajuste o zoom com os botões + e -
   - Clique em palavras para ampliá-las
   - Passe o mouse sobre versículos para ver opção de marcação
   - Clique no ícone de marcador para destacar com cor
   - Use as setas para navegar entre capítulos

## 🎨 Paleta de Cores

- **Background**: Gradiente de slate (950 → 900)
- **Primária**: Purple (500) e Blue (600)
- **Texto**: White e Slate (100-400)
- **Destaques**: Amarelo, Verde, Azul, Rosa, Roxo

## 📱 Responsividade

- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Grid adaptativo
- **Desktop**: Máxima largura de 4xl para melhor leitura

## 🔮 Recursos Futuros (Sugestões)

- [ ] Modo escuro/claro
- [ ] Anotações pessoais por versículo
- [ ] Compartilhamento de versículos
- [ ] Histórico de leitura
- [ ] Plano de leitura bíblica
- [ ] Busca por palavras-chave
- [ ] Comparação de traduções
- [ ] Versículo do dia
- [ ] Favoritos

## 🤝 Contribuições

Esta implementação foi criada para proporcionar uma experiência moderna e envolvente de leitura da Bíblia, mantendo o mesmo padrão de design do restante do site.

---

**Desenvolvido com ❤️ para Igreja dos Vales**
