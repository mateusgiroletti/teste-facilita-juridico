CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_name = 'clients'
) THEN CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    email VARCHAR(150),
    phone VARCHAR(20),
    coordinate_x INTEGER,
    coordinate_y INTEGER
);
END IF;
END $$;