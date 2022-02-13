import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
    email: string;
    message: string
}

class CreateMessageService {
    async execute({email, message}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!email){
            throw new Error("Por favor informe seu email!")
        }

        if(!message){
            throw new Error("Por favor escreva algo!")
        }

        const newMessage = messageRepository.create({ email, message })

        await messageRepository.save(newMessage);

        return newMessage;
    }
}

export  { CreateMessageService }