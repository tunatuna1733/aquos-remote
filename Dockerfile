FROM denoland/deno:ubuntu

EXPOSE 7000

WORKDIR /app

COPY . .

RUN deno cache main.ts

RUN deno task build

CMD ["run", "-A", "main.ts"]