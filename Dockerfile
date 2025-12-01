# Stage 1: Build Rust/Wasm
FROM rust:1.75 as rust-builder
RUN cargo install wasm-pack
WORKDIR /app
COPY core ./core
WORKDIR /app/core
RUN wasm-pack build --target web --release

# Stage 2: Build React UI
FROM node:20 as node-builder
WORKDIR /app
COPY ui ./ui
COPY --from=rust-builder /app/core/pkg ./core/pkg
WORKDIR /app/ui
RUN npm install
RUN npm run build

# Stage 3: Serve with Nginx
FROM nginx:alpine
COPY --from=node-builder /app/ui/dist /usr/share/nginx/html
RUN echo "types { application/wasm wasm; }" >> /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]