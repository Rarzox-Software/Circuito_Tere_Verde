// MockStore.ts
import { Parque, TipoPostagem } from "./Enumerations";
import testeImg from "../assets/teste.png";

// ---------------- Tipagens ---------------- //

export interface Admin {
    id: number;
    nome: string;
    login: string;
    senha: string;
}

export interface Postagem {
    id: number;
    parque: Parque;
    tipo: TipoPostagem;
    titulo: string;
    descricao: string;
    foto: string;
    dataPostagem: Date;
    dataInicio?: Date;
    dataFim?: Date;
}


// ---------------- MockStore ---------------- //

export class MockStore {
    private static instance: MockStore;

    private administradores: Admin[] = [];
    private logado: Admin | null = null;
    private postagens: Postagem[] = [];

    private idSequencialPostagens: number = 3;
    private idSequencialAdmin: number = 2;

    private constructor() {
        // Administrador padrão
        this.administradores.push({
            id: 1,
            nome: "Administrador",
            login: "admin@gmail.com",
            senha: "123"
        });

        // Administrador padrão
        this.postagens.push({
            id: 1,
            parque: Parque.PNMMT,
            tipo: TipoPostagem.Trilhas,
            titulo: "Trilha Suspença",
            descricao: "Temos uma boa notícia para vocês, a Trinlha suspença tão amada por todos está LIBERADA! Venham visitar e conhecer a natureza.",
            foto: testeImg,
            dataPostagem: new Date()
        });

        this.postagens.push({
            id: 2,
            parque: Parque.PNMMT,
            tipo: TipoPostagem.Biodiversidade,
            titulo: "Trilha Suspença 2",
            descricao: "Temos uma boa notícia para vocês, a Trinlha suspença tão amada por todos está LIBERADA! Venham visitar e conhecer a",
            foto: testeImg,
            dataPostagem: new Date()
        });
    }

    public static getInstance(): MockStore {
        if (!MockStore.instance) {
            MockStore.instance = new MockStore();
        }
        return MockStore.instance;
    }

    // ---------------- Administradores ---------------- //

    public addAdministrador(nome: string, login: string, senha: string): Admin {
        var id = this.idSequencialAdmin;
        this.idSequencialPostagens++;

        const novoAdmin: Admin = {
            id,
            nome,
            login,
            senha,
        };

        this.administradores.push(novoAdmin);
        return novoAdmin;
    }

    public login(login: string, senha: string): boolean {
        const admin = this.administradores.find(a => a.login === login && a.senha === senha);
        if (!admin) return false;

        this.logado = admin;
        return true;
    }

    public logout(): void {
        this.logado = null;
    }

    public estaLogado(): boolean {
        return this.logado !== null;
    }

    public getUsuarioLogado(): Admin | null {
        return this.logado;
    }


    // ---------------- Postagens ---------------- //

    public addPostagem(data: Postagem) {
        // gera id sequencial
        data.id = this.idSequencialPostagens;
        this.idSequencialPostagens++;

        this.postagens.push(data);
    }

    public editarPostagem(id: number, novosDados: Partial<Postagem>): boolean {
        const index = this.postagens.findIndex(p => p.id === id);
        if (index === -1) return false;

        this.postagens[index] = { ...this.postagens[index], ...novosDados };
        return true;
    }

    public deletarPostagem(id: number): boolean {
        const tamanhoAntes = this.postagens.length;
        this.postagens = this.postagens.filter(p => p.id !== id);
        return this.postagens.length < tamanhoAntes;
    }

    public getTodasPostagens(): Postagem[] {
        return this.postagens;
    }

    public getPostagensPorParque(parque: Parque): Postagem[] {
        return this.postagens.filter(p => p.parque === parque);
    }

    public getPostagensPorTipo(tipo: TipoPostagem): Postagem[] {
        return this.postagens.filter(p => p.tipo === tipo);
    }

    public getPostagensPorParqueETipo(parque: Parque, tipo: TipoPostagem): Postagem[] {
        return this.postagens.filter(
            p => p.parque === parque && p.tipo === tipo
        );
    }

    public getUltimasPostagens(): Postagem[] {
        const hoje = new Date();

        // Filtra apenas as não expiradas
        const validas = this.postagens.filter(p => {
            if (!p.dataFim) return true;            // sem data fim = nunca expira
            return p.dataFim >= hoje;               // só mantém se ainda não expirou
        });

        // Ordena da postagem mais recente para a mais antiga
        validas.sort((a, b) => {
            return b.dataPostagem.getTime() - a.dataPostagem.getTime();
        });

        // Retorna apenas as 5 últimas
        return validas.slice(0, 5);
    }

}
