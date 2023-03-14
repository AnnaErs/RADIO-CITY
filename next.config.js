/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    webpack: (config, options) => {
        config.externals.push(
            "https://api-maps.yandex.ru/3.0/?apikey=ec8c40af-e619-46db-9edb-20a13166245c&lang=ru_RU",
        );
        return config;
    },
};

module.exports = nextConfig;
