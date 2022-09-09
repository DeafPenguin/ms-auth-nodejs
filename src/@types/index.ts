import express, {Request, Response, NextFunction} from 'express';
import usersRoute from '../routes/users.route';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Sucesso total! Atualização em tempo real ocorrendo.'});
});

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!');
});