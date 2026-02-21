# Guia de Deploy na Locaweb para agendadofuturo.com

## Resumo das Alterações Realizadas

Este documento detalha as modificações feitas no repositório para automatizar o deploy do site em agendadofuturo.com via Locaweb usando GitHub Actions.

### 1. Arquivo `.htaccess` (novo)
**Localização:** `public/.htaccess`

**Propósito:** Configurar o Apache para reescrever URLs de forma que todas as rotas sejam direcionadas para `index.html`, permitindo que o React Router gerencie o roteamento no lado do cliente.

**Conteúdo:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 2. Workflow do GitHub Actions (novo)
**Localização:** `.github/workflows/deploy-locaweb.yml`

**Propósito:** Automatizar o processo de build e deploy para Locaweb sempre que há um push na branch main.

**Fluxo:**
1. Checkout do código
2. Instalação do Node.js 18
3. Instalação de dependências npm
4. Build do projeto Vite
5. Deploy dos arquivos via FTP para a pasta `public_html/` da Locaweb

### 3. Secrets do GitHub (novos)
**Localização:** Settings > Secrets and variables > Actions

Três secrets foram criados para armazenar as credenciais de FTP de forma segura:

- **LOCAWEB_FTP_SERVER:** Endereço do servidor FTP (ex: `ftp.agendadofuturo.com`)
- **LOCAWEB_FTP_USERNAME:** Usuário FTP criado na Locaweb
- **LOCAWEB_FTP_PASSWORD:** Senha do usuário FTP

## Próximos Passos

### ⚠️ IMPORTANTE: Atualizar os Secrets

Os valores dos secrets atualmente contêm placeholders. Você DEVE atualizar com suas credenciais reais:

1. Acesse: `Settings > Secrets and variables > Actions`
2. Para cada secret (LOCAWEB_FTP_SERVER, LOCAWEB_FTP_USERNAME, LOCAWEB_FTP_PASSWORD):
   - Clique no ícone de edição (lápis)
   - Substitua o valor pelo valor real
   - Clique em "Update secret"

### Obter as Credenciais de FTP da Locaweb

1. Acesse seu Painel de Controle da Locaweb
2. Vá em **Hospedagem de Sites > Configurações de FTP**
3. Procure pela conta FTP padrão ou crie uma nova (recomendado)
4. Anote:
   - **Host FTP:** ex `ftp.seudominio.com.br`
   - **Usuário:** seu usuário de FTP
   - **Senha:** sua senha de FTP
   - **Diretório Público:** geralmente é `/public_html/`

### Como o Deploy Funciona

1. Você faz um commit para a branch `main`
2. O GitHub Actions detecta o push
3. O workflow automaticamente:
   - Constrói o projeto
   - Faz upload dos arquivos da pasta `dist/` para `public_html/` via FTP
4. Seu site fica disponível em `agendadofuturo.com`

## Estrutura de Roteamento

Como a aplicação é uma SPA (Single Page Application) com React Router:

- A pasta `public/` contém a configuração `.htaccess`
- Todos os arquivos estáticos são build pela Vite para a pasta `dist/`
- O arquivo `dist/index.html` é o ponto de entrada
- As rotas como `/contato`, `/sobre`, etc. são tratadas pelo React Router

## Testando o Deploy Local

Antes de fazer push, você pode testar localmente:

```bash
# Build
npm run build

# Servir os arquivos
npm run preview

# Acessar em http://localhost:4173
```

## Troubleshooting

### Erro 404 ao acessar rotas
- **Causa:** O arquivo `.htaccess` não foi enviado ou não está funcionando
- **Solução:** Verifique se o arquivo está em `public_html/` e se o Apache tem `mod_rewrite` ativado

### Workflow falhando no GitHub Actions
- **Causa provável:** Secrets configurados incorretamente
- **Solução:** Verifique os valores dos secrets em Settings > Secrets and variables

### Arquivo antigo aparecendo
- **Causa:** Cache do navegador
- **Solução:** Limpe o cache ou abra em modo incógnito

## Referências

- [Documentação do Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [GitHub Actions](https://github.com/features/actions)
- [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
