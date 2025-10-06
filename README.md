# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/76d44630-29c1-4d1e-8f71-0e0751f9531c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/76d44630-29c1-4d1e-8f71-0e0751f9531c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploying with Lovable

Simply open [Lovable](https://lovable.dev/projects/76d44630-29c1-4d1e-8f71-0e0751f9531c) and click on Share -> Publish.

### Deploying manually to GitHub Pages

If you prefer to publish the site yourself using GitHub Pages, follow the steps below:

1. **Instale as dependências** (caso ainda não tenha feito):
   ```sh
   npm install
   ```
2. **Gere os arquivos estáticos** usando a configuração de `base` já presente em `vite.config.ts`:
   ```sh
   npm run build
   ```
   O comando criará a pasta `dist/` com os assets apontando para o subcaminho `/bidimidia-lp/`.
3. **Envie o conteúdo de `dist/` para a branch publicada pelo GitHub Pages**. Existem duas abordagens comuns:
   - **Branch `gh-pages`**: inicialize (ou atualize) uma branch separada com o conteúdo da pasta `dist/` e faça push para `origin gh-pages`.
   - **Pasta `/docs` na branch principal**: copie o conteúdo de `dist/` para uma pasta `docs/` rastreada pelo Git e faça o commit na branch configurada no GitHub Pages.
4. **Atualize a configuração do GitHub Pages** no repositório, certificando-se de que a branch/pasta escolhida no passo anterior esteja selecionada em *Settings ▸ Pages*.
5. Aguarde alguns minutos para o GitHub processar a publicação e acesse `https://<seu-usuario>.github.io/bidimidia-lp/` para validar.

> Dica: ao testar localmente com `npm run dev`, você pode passar a variável `--host` (por exemplo `npm run dev -- --host`) para acessar o preview em outros dispositivos na mesma rede.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
