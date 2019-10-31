const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 5555
    },
    db: {
        username: process.env.DEV_DB_USERNAME ||'postgres',
        password: process.env.DEV_DB_PASSWORD || '0000',
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'class_room_manager'
    }
};

const test = {
};

const production = {
};

const config = {
    dev,
    test,
    production
};

export default config.dev