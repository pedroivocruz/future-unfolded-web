# 🌍 Agenda do Futuro

**Suporte técnico ambiental para a engenharia da sua obra**

## 📋 Sobre o Projeto

Agenda do Futuro é uma plataforma que oferece soluções de gestão ambiental para projetos de engenharia, focando em conformidade técnica, certificações LEED/AQUA, reuso de água e eficiência energética.

- 🌐 **Website**: https://agendadofuturo.com/
- 🔗 **GitHub Pages**: https://pedroivocruz.github.io/future-unfolded-web/
- 👨‍💻 **Desenvolvedor**: [Pedro Iivo Cruz](https://github.com/pedroivocruz)
- 🛠️ **Construído com**: [Lovable.dev](https://lovable.dev)
- 🔧 **Stack**: React 18 + TypeScript + Vite + React Router

---

## 📊 Fluxo Completo de Solução: Publicar Projeto Lovable.dev no GitHub Pages

### 🔴 Problema Inicial

Quando o projeto foi publicado no GitHub Pages, o site aparecia **completamente em branco**, mostrando apenas o título "Lovable App" sem nenhum conteúdo renderizado. O usuário reportou: "Por que o site fica em branco?"

### 🔍 Análise de Erros Identificados

Através de screenshots dos erros no console do navegador, foram identificados os seguintes problemas:

1. **MIME Type Errors**: `refused to execute script from '' because its MIME type ('text/plain') is not executable`
2. **404 Errors**: Arquivos JavaScript e CSS não estavam sendo encontrados
3. **Asset Path Issues**: Os caminhos dos assets estavam incorretos (relativos vs absolutos)
4. **Routing Issues**: As rotas da aplicação retornavam 404 quando acessadas diretamente

### 🎯 Causa Raiz

O arquivo `index.html` na raiz do repositório apontava para `/src/main.tsx`, um arquivo TypeScript que **não é compilado**. GitHub Pages não consegue executar TypeScript direto, resultando em:

- Arquivo fonte não compilado sendo servido como plain text
- Navegador rejeitando o script com MIME type error
- Site renderizado sem o conteúdo React

### ✅ Solução em 7 Etapas (GitHub Actions + Configuração)

#### **Etapa 1: Criar GitHub Actions Workflow para Build Automático**

**Arquivo**: `.github/workflows/main.yml`

**Objetivo**: Automatizar o build com Vite e fazer deploy automático para a branch `gh-pages`

**Passos**:
1. Checkout do repositório
2. Setup Node.js 18
3. Instalar dependências com `npm install`
4. Compilar projeto com `npm run build`
5. Deploy para `gh-pages` com `peaceiris/actions-gh-pages@v3`
6. Configurar permissões: `permissions: contents: write`

**Resultado**: Cada push para `main` gera automaticamente os arquivos compilados em `dist/` e faz deploy para `gh-pages`

---

#### **Etapa 2: Configurar Vite para GitHub Pages (Base Path)**

**Arquivo**: `vite.config.ts`

**Problema**: Quando o site é servido em `https://username.github.io/repo-name/`, todos os assets precisam ter o prefixo `/repo-name/`

**Solução**:
```typescript
export default defineConfig({
  base: '/future-unfolded-web/',
  plugins: [react()],
  // ... resto da config
});
```

**Resultado**: Build gera assets com paths corretos: `/future-unfolded-web/assets/...` ao invés de `/assets/...`

---

#### **Etapa 3: Configurar React Router com Basename**

**Arquivo**: `src/App.tsx` ou `src/main.tsx`

**Problema**: React Router não reconhecia o prefixo `/future-unfolded-web/` nas rotas

**Solução**:
```typescript
import { BrowserRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/future-unfolded-web/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

**Resultado**: Rotas como `/features` funcionam corretamente como `https://pedroivocruz.github.io/future-unfolded-web/features`

---

#### **Etapa 4: Adicionar 404.html para SPA Routing**

**Arquivo**: `public/404.html`

**Problema**: Acessar diretamente uma rota como `https://pedroivocruz.github.io/future-unfolded-web/features` retornava 404 do GitHub Pages antes do React Router processar

**Solução**: Criar `404.html` que redireciona para `index.html`, permitindo que React Router processe a rota:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Agenda do Futuro</title>
  <script>
    // Redirect to index.html, preserving the path
    var pathparts = location.pathname.split('/').filter(p => p);
    location.replace('/' + pathparts.slice(0, -1).join('/') + '/?redirect=' + pathparts[pathparts.length - 1]);
  </script>
</head>
</html>
```

**Resultado**: Qualquer rota desconhecida é redirecionada para `index.html`, permitindo o React Router gerenciar a navegação

---

#### **Etapa 5: Configurar GitHub Pages para usar branch gh-pages**

**Localização**: Settings → Pages

**Passos**:
1. Ir para Repository Settings
2. Acessar aba "Pages"
3. Em "Source", selecionar:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Salvar

**Resultado**: GitHub Pages começa a servir conteúdo da branch `gh-pages` automaticamente

---

#### **Etapa 6: Verificar Workflow Execution**

**Localização**: Actions → Build and Deploy to GitHub Pages

**O que observar**:
- ✅ Push dispara o workflow automaticamente
- ✅ Checkout → Setup Node → Install → Build completa sem erros
- ✅ Deploy para `gh-pages` concluído
- ✅ Log mostra: "Published to gh-pages"

**Resultado**: Cada commit em `main` gera novo build e atualiza o site

---

#### **Etapa 7: Teste e Propagação de DNS (se usando domínio personalizado)**

**Para GitHub Pages padrão** (`pedroivocruz.github.io/future-unfolded-web/`):
- Tempo de propagação: **< 1 minuto** (geralmente imediato)
- Nenhuma configuração adicional necessária

**Para domínio personalizado** (`agendadofuturo.com`):
- Adicionar em Settings → Pages → Custom Domain
- Configurar DNS CNAME apontando para `pedroivocruz.github.io`
- Tempo de propagação: **5-48 horas** (depende do provedor DNS)
- Certificado HTTPS é configurado automaticamente

### 📈 Comparação: Antes vs Depois

| Aspecto | Antes | Depois |
|--------|-------|--------|
| Problema | Site em branco | Site renderizado corretamente |
| Build | Manual, propenso a erros | Automático via GitHub Actions |
| Assets | Paths incorretos | Paths corretos com base path |
| Rotas SPA | 404 em acesso direto | Funcionam corretamente |
| Deploy | Manual para gh-pages | Automático a cada push |
| Tempo de propagação | N/A | Imediato (padrão), até 48h (customizado) |

---

## 🚀 Para Começar a Desenvolver

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento Local
```bash
npm run dev
```

O site será disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/`

### Deploy
Simplemente faça push para a branch `main` e o GitHub Actions cuidará do resto:

```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

---

## 📚 Referências e Recursos

- [Vite Documentation](https://vitejs.dev/)
- [React Router v6 Guide](https://reactrouter.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [GitHub Actions Guide](https://docs.github.com/actions)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

---

## 📝 Licença

Este projeto foi criado com [Lovable](https://lovable.dev).

---

## 👨‍💻 Autor

**Pedro Iivo Cruz**
- GitHub: [@pedroivocruz](https://github.com/pedroivocruz)
- LinkedIn: [Pedro Iivo Cruz](https://linkedin.com)

---

## 🤝 Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/pedroivocruz/future-unfolded-web/issues) no repositório.
