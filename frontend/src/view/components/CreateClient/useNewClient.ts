import React, { useState } from "react";
import { ZodError, z } from "zod";

import { clientService } from "../../../app/services/clients";
import { useListClient } from "../ListClients/useListClient";

const clientSchema = z.object({
    name: z.string().min(1, 'O campo Nome é obrigatório').max(255, 'Limite de 255 caracteres execido'),
    email: z.string().email('O campo Email é inválido').max(150, 'Limite de 150 caracteres execido'),
    phone: z.string().min(1, 'O telefone é obrigatório').max(20, 'Limite de 20 caracteres execido'),
    coordinate_x: z.string().min(1, 'A coordenada X é obrigatória').max(11, 'Limite de 11 caracteres execido'),
    coordinate_y: z.string().min(1, 'A coordenada Y é obrigatória').max(11, 'Limite de 11 caracteres execido'),
});

export function useNewClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coordinateX, setCoordinateX] = useState('');
    const [coordinateY, setCoordinateY] = useState('');

    const { loadClients } = useListClient();


    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPhone(event.target.value);
    }

    function handleCoordinateXChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCoordinateX(event.target.value);
    }

    function handleCoordinateYChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCoordinateY(event.target.value);
    }

    function resetFields() {
        setName("");
        setEmail("");
        setPhone("");
        setCoordinateX("");
        setCoordinateY("");
    }

    const [validationError, setValidationError] = useState<ZodError | null>(null);


    async function handleSubmitCreateClient() {
        try {
            const validatedClient = clientSchema.parse({
                name,
                email,
                phone,
                coordinate_x: coordinateX,
                coordinate_y: coordinateY
            });

            await clientService.create(validatedClient);

            setValidationError(null);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setValidationError(error);
            } else {
                console.error('Erro ao cadastrar cliente:', error);
            }
        } finally {
            resetFields();
            loadClients();
        }
    };

    return {
        handleSubmitCreateClient,
        validationError,
        name,
        handleNameChange,
        email,
        handleEmailChange,
        phone,
        handlePhoneChange,
        coordinateX,
        handleCoordinateXChange,
        coordinateY,
        handleCoordinateYChange,
    };
}