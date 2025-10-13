# ####################
# Build Stage
# ####################
FROM node:lts AS build
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and workspace config for dependency installation
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies with frozen lockfile
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the Astro site
RUN pnpm run build

# ####################
# Runtime Stage
# ####################
FROM httpd:2.4 AS runtime

# Copy built site to Apache directory
COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80