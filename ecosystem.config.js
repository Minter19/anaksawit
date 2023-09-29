module.exports = {
  apps: [
    {
      name: "aplikasi anak-sawit",
      script: "npm",
      args: "run start",
      // watch: true,
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
        PORT: 3000,
        ALAMAT: "Lokal",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/59"
      },
      env_production: {
        PORT: 4000,
        ALAMAT: "Production",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/32"
      },
      env_stagging: {
        NODE_ENV: "development",
        PORT: 5000,
        ALAMAT: "Development",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/3"
      }
    },
    {
      name: "aplikasi anak-sawit 2",
      script: "npm",
      args: "run start",
      // watch: true,
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
        PORT: 8000,
        ALAMAT: "Lokal",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/80"
      },
      env_production: {
        PORT: 8001,
        ALAMAT: "Production",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/81"
      },
      env_stagging: {
        NODE_ENV: "development",
        PORT: 8002,
        ALAMAT: "Development",
        API_TARGET: "https://jsonplaceholder.typicode.com/posts/82"
      }
    },
  ],
};
