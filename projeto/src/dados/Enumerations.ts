export enum Parque {
    PNSO = "Parque Nacional da Serra dos Órgãos",
    PETP = "Parque Estadual dos Três Picos",
    PNMMT = "Parque Natural Municipal Montanhas de Teresópolis"
}

export enum TipoPostagem {
    Trilhas = "Trilhas",
    Cachoeiras = "Cachoeiras",
    Biodiversidade = "Biodiversidade",
    Eventos = "Eventos",
    Novidades = "Novidades",
    Atracoes = "Atrações"
}

// Para preencher combobox no front (React/HTML/TS)
export const ListaParques = Object.values(Parque);
export const ListaTipos = Object.values(TipoPostagem);