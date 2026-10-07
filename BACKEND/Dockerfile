FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción de forma segura
RUN npm ci --only=production --ignore-scripts

# Copiar código de la aplicación
COPY src/ ./src/
COPY sql/ ./sql/
COPY uploads/ ./uploads/

# Crear directorio para cargas si no existe
RUN mkdir -p uploads/contracts

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]