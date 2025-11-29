export enum Parque {
    PNSO = "Parque Nacional da Serra dos Órgãos",
    PNMMT = "Parque Natural Municipal Montanhas de Teresópolis",
    PETP = "Parque Estadual dos Três Picos"
}

export enum TipoPostagem {
    Trilhas = "TRILHAS",
    Cachoeiras = "CACHOEIRAS",
    Biodiversidade = "BIODIVERSIDADE",
    Eventos = "EVENTOS",
    Novidades = "NOVIDADES",
    Atracoes = "ATRAÇÕES",
    Sobre = "SOBRE"
}

// Para preencher combobox no front (React/HTML/TS)
export const ListaParques = Object.values(Parque);
export const ListaTipos = Object.values(TipoPostagem);