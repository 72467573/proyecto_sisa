# Imagen base de Nginx
FROM nginx:stable-alpine

# Copiamos todo el contenido de tu proyecto al contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80 (puerto estándar de Nginx)
EXPOSE 80

# Comando por defecto para mantener Nginx corriendo
CMD ["nginx", "-g", "daemon off;"]
